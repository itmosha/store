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
    Input
} from '@chakra-ui/react';
import { useStateContext } from "../../context/StateContext";

const PochtaForm = () => {
    const { totalPrice, cartItems } = useStateContext();

    const validateInitials = (value) => { return ( !value ? 'Обязательное поле' : null ) };
    const validatePhoneNumber = (value) => { return ( !value ? 'Обязательное поле' : (
        value.trim().startsWith('+7') || value.trim().startsWith('8') ? null : 'Номер должен начинаться с +7 или 8' ) ) };
    const validateEmail = (value) => { return ( !value ? 'Обязательное поле' : (
        value.indexOf('@') <= -1 ? 'Некорректный email' : null ) ) };
    const validateAddress = (value) => { return ( !value ? 'Обязательное поле' : null) };
    const validatePostalCode = (value) => { return ( !value ? 'Обязательное поле' : ( value.length === 6 ? null : 'Некорректный почтовый индекс' ))}

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
                    postal_code: ''
                }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        let data = {
                            items: cartItems.map((item) => (item.slug)),
                            items_price:  totalPrice,
                            delivery_price: 250,
                            total_price: totalPrice + 250,
                            first_name: values.imya,
                            last_name: values.familiya,
                            middle_name: values.otchestvo,
                            email: values.email,
                            phone: values.phone,
                            address: values.address,
                            postal_code: values.postal_code
                        }
                        sendUserForm(data);
                        actions.setSubmitting(false);
                    }, 1);
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
                            <Box py={'0.5rem'}>
                                <Field name={'postal_code'} validate={ validatePostalCode }>
                                    {({ field, form }) => (
                                        <FormControl isInvalid={ form.errors.postal_code && form.touched.postal_code }>
                                            <Input {...field} placeholder={'Почтовый индекс'} />
                                            <FormErrorMessage>{ form.errors.postal_code }</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            </Box>
                            <Button mt={'1rem'} colorScheme={'red'} isLoading={ props.isSubmitting } type={'submit'}>
                                Оплатить
                            </Button>
                        </Form>
                    </Box>
                )}
            </Formik>
        </Box>
    );
};

export const sendUserForm = async (data) => {
    await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOSTNAME}/api/orders`, {
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json; charset=utf8"
        },
        method: 'POST'
    });
}
export default PochtaForm;
