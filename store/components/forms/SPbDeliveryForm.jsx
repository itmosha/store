import React from 'react';
import { Field, Form, Formik } from "formik";
import {Button, Box, Divider, FormControl, FormErrorMessage, FormLabel, Input} from "@chakra-ui/react";

const SPbDeliveryForm = () => {

    function validateInitials(value) {
        let error;
        if (!value) {
            error = 'Обязательное поле';
        }
        return error;
    }

    function validatePhoneNumber(value) {
        let error;
        if (!value) {
            error = 'Обязательное поле';
        } else if (!value.trim().startsWith('+7')) {
            error = 'Номер должен начинаться с +7 или 8'
        }
        return error;
    }

    function validateEmail(value) {
        let error;
        if (!value) {
            error = 'Обязательное поле';
        } else if (value.indexOf('@') <= -1) {
            error = 'Некорректный email';
        }
        return error;
    }

    function validateAddress(value) {
        let error;
        if (!value) {
            error = 'Обязательное поле'
        }
        return error;
    }

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