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

const SPbDeliveryForm = () => {

    const validateInitials = (value) => { return ( !value ? 'Обязательное поле' : null ) };
    const validatePhoneNumber = (value) => { return ( !value ? 'Обязательное поле' : (
        value.trim().startsWith('+7') || value.trim().startsWith('8') ? null : 'Номер должен начинаться с +7 или 8' ) ) };
   const validateEmail = (value) => { return ( !value ? 'Обязательное поле' : (
       value.indexOf('@') <= -1 ? 'Некорректный email' : null ) ) };
   const validateAddress = (value) => { return ( !value ? 'Обязательное поле' : null) };


    return (
        <Formik
            initialValues={{ familiya: '', imya: '', otchestvo: '', phoneNumber: '', email: '', address: '' }}
            onSubmit={(values, actions) => {
                    setTimeout(() => {
                        console.log(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                    }, 1);
                }}
        >
            {(props) => (
                <Form>
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
                        <Field name={'phoneNumber'} validate={ validatePhoneNumber }>
                            {({ field, form }) => (
                                <FormControl isInvalid={ form.errors.phoneNumber && form.touched.phoneNumber }>
                                    <Input {...field} placeholder={'Номер телефона'} />
                                    <FormErrorMessage>{ form.errors.phoneNumber }</FormErrorMessage>
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
                        <Field name={'address'} validate={ validateAddress }>
                            {({ field, form }) => (
                                <FormControl isInvalid={ form.errors.address && form.touched.address }>
                                    <Input {...field} placeholder={'Адрес доставки'} />
                                    <FormErrorMessage>{ form.errors.address }</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                    </Box>
                    <Button mt={'1rem'} colorScheme={'red'} isLoading={ props.isSubmitting } type={'submit'}>
                        Оплатить заказ
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default SPbDeliveryForm;