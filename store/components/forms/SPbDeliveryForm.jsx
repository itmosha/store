import React from 'react';
import {
    Field,
    Form,
    Formik
} from 'formik';
import {
    Button,
    Box,
    FormControl,
    FormErrorMessage,
    Input, ButtonGroup
} from '@chakra-ui/react';
import { useStateContext } from "../../context/StateContext";
import { sha256 } from "js-sha256";
import { setCookie } from "cookies-next";
import tinkoff from '@tcb-web/create-credit';

const SPbDeliveryForm = () => {

    const { totalPrice, cartLegoSets, setCartLegoSets, cartMinifigures, setCartMinifigures, cartParts, setCartParts, setTotalPrice, setTotalQuantities } = useStateContext();

    const validateInitials = (value) => { return ( !value ? 'Обязательное поле' : null ) };
    const validateEmail = (value) => { return ( !value ? 'Обязательное поле' : (
        value.indexOf('@') <= -1 ? 'Некорректный email' : null ) ) };
    const validatePhoneNumber = (value) => { return ( !value ? 'Обязательное поле' : (
        value.trim().startsWith('+7') || value.trim().startsWith('8') ? null : 'Номер должен начинаться с +7 или 8' ) ) };
    const validateAddress = (value) => { return ( !value ? 'Обязательное поле' : null) };

    return (
        <Box>
            <Formik
                initialValues={{
                    familiya: '',
                    imya: '',
                    otchestvo: '',
                    email: '',
                    phone: '',
                    address: '',
                }}
                onSubmit={(values, actions) => {
                    setTimeout(async () => {
                        const itemsLegoSets = cartLegoSets.map((cartLegoSet) => `${cartLegoSet.slug}-${cartLegoSet.quantity}`);
                        const itemsMinifigures = cartMinifigures.map((cartMinifigure) => `${cartMinifigure.slug}-${cartMinifigure.quantity}`);
                        const itemsParts = cartParts.map((cartPart) => `${cartPart.slug}-${cartPart.quantity}`);

                        let data = {
                            items_legoSets: itemsLegoSets,
                            items_minifigures: itemsMinifigures,
                            items_parts: itemsParts,
                            items_price: totalPrice,
                            delivery_price: 100,
                            total_price: totalPrice + 100,
                            delivery_type: 'spb',
                            first_name: values.imya,
                            last_name: values.familiya,
                            middle_name: values.otchestvo,
                            email: values.email,
                            phone: values.phone,
                            address: values.address,
                        }
                        const orderId = await postOrder(data);

                        const response = await fetch('https://securepay.tinkoff.ru/v2/Init', {
                            method: 'POST',
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                "TerminalKey": process.env.NEXT_PUBLIC_TERMINAL_KEY,
                                "Amount": data.total_price * 100,
                                "OrderId": orderId,
                                "Description": `Заказ на ${data.total_price} рублей`,
                                "DATA": {
                                    "Phone": data.phone,
                                    "Email": data.email
                                }
                            })
                        });
                        const responseJson = await response.json();

                        if (responseJson.Success) {
                            if (responseJson.Status === "NEW") {
                                window.open(responseJson.PaymentURL, '_blank');
                            } else {
                                alert("Не удалось создать новый платёж");
                                return;
                            }
                        } else {
                            alert("Ошибка соединения с API платёжной системы");
                            return;
                        }

                        const stringToEncode = `${process.env.NEXT_PUBLIC_TERMINAL_PASSWORD}${responseJson.PaymentId}${process.env.NEXT_PUBLIC_TERMINAL_KEY}`;
                        const TOKEN = sha256(stringToEncode);


                        let status = "NEW";

                        do {
                            const state = await fetch('https://securepay.tinkoff.ru/v2/GetState', {
                                method: 'POST',
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    "TerminalKey": process.env.NEXT_PUBLIC_TERMINAL_KEY,
                                    "PaymentId": responseJson.PaymentId,
                                    "Token": TOKEN
                                })
                            });
                            const stateJson = await state.json();
                            status = stateJson.Status;

                            if (status === "AUTHORIZED") {
                                setCookie('cookieCartLegoSets', []);
                                setCookie('cookieCartMinifigures', []);
                                setCookie('cookieCartParts', []);
                                setCookie('totalCartPrice', 0);
                                setCookie('totalCartQuantities', 0);
                                setCartLegoSets([]);
                                setCartMinifigures([]);
                                setCartParts([]);
                                setTotalPrice(0);
                                setTotalQuantities(0);

                                await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOSTNAME}/api/orders/${orderId}/`, {
                                    method: 'PATCH',
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        "state": "paid"
                                    })
                                });
                                break;
                            } else if (status === "CANCELED") {
                                await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOSTNAME}/api/orders/${orderId}/`, {
                                    method: 'PATCH',
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        "state": "canceled"
                                    })
                                });
                                break;
                            }
                            await new Promise(r => setTimeout(r, 500));
                        } while (status !== "DEADLINE_EXPIRED" && status !== "AUTH_FAIL");

                        actions.setSubmitting(false);
                    }, 500);
                }}
            >
                {(props) => (
                    <Box>
                        <Form name={'TinkoffPayForm'}>
                            <Box py={'0.5rem'}>
                                <Field name={'familiya'} validate={ validateInitials }>
                                    {({ field, form }) => (
                                        <FormControl isInvalid={ form.errors.familiya && form.touched.familiya }>
                                            <Input {...field} placeholder={'Фамилия'} />
                                            <FormErrorMessage>{ form.errors.familiya }</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </Box>
                            <Box py={'0.5rem'}>
                                <Field name={'imya'} validate={ validateInitials }>
                                    {({ field, form }) => (
                                        <FormControl isInvalid={ form.errors.imya && form.touched.imya }>
                                            <Input {...field} placeholder={'Имя'} />
                                            <FormErrorMessage>{ form.errors.imya }</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </Box>
                            <Box py={'0.5rem'}>
                                <Field name={'otchestvo'}>
                                    {({ field, form }) => (
                                        <FormControl isInvalid={ form.errors.otchestvo && form.touched.otchestvo }>
                                            <Input {...field} placeholder={'Отчество'} />
                                            <FormErrorMessage>{ form.errors.otchestvo }</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </Box>
                            <Box py={'0.5rem'}>
                                <Field name={'email'} validate={ validateEmail }>
                                    {({ field, form }) => (
                                        <FormControl isInvalid={ form.errors.email && form.touched.email }>
                                            <Input {...field} placeholder={'Email'} />
                                            <FormErrorMessage>{ form.errors.email }</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </Box>
                            <Box py={'0.5rem'}>
                                <Field name={'phone'} validate={ validatePhoneNumber }>
                                    {({ field, form }) => (
                                        <FormControl isInvalid={ form.errors.phone && form.touched.phone }>
                                            <Input {...field} placeholder={'Номер телефона'} />
                                            <FormErrorMessage>{ form.errors.phone }</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </Box>
                            <Box py={'0.5rem'}>
                                <Field name={'address'} validate={ validateAddress }>
                                    {({ field, form }) => (
                                        <FormControl isInvalid={ form.errors.address && form.touched.address }>
                                            <Input {...field} placeholder={'Адрес доставки'} />
                                            <FormErrorMessage>{ form.errors.address }</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </Box>
                            <ButtonGroup>
                                <Button mt={'1rem'} colorScheme={'blue'} isLoading={ props.isSubmitting } type={'submit'}>
                                    Оплатить
                                </Button>
                                { totalPrice >= 3000 && (
                                    <Button
                                        mt={'1rem'}
                                        type="button"
                                        onClick={ () => {
                                            const allItems = cartLegoSets.concat(cartMinifigures, cartParts);
                                            const itemsList = allItems.map((item) => ({ name: item.title, price: item.price, quantity: item.quantity }));
                                            tinkoff.create({
                                                sum: totalPrice,
                                                items: itemsList,
                                                demoFlow: 'sms',
                                                promoCode: 'installment_0_0_6_5,85',
                                                shopId: process.env.NEXT_PUBLIC_SHOP_ID,
                                                showcaseId: process.env.NEXT_PUBLIC_SHOWCASE_ID
                                            }, {view: 'modal'})} }
                                    >Купить в рассрочку</Button>
                                )}
                            </ButtonGroup>
                        </Form>
                    </Box>
                )}
            </Formik>
        </Box>
    );
};

export const postOrder = async (data) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOSTNAME}/api/orders/`, {
        method: 'POST',
        body: JSON.stringify(data),
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
        }
    });


    const resposeJson = await response.json();
    return resposeJson.unique_uuid;
}
export default SPbDeliveryForm;