import React from 'react';
import {
    Box,
    Text,
    Heading,
    Highlight
} from '@chakra-ui/react';

const ContactsPage = () => {
    return (
        <Box>
            <Heading fontSize={'28px'}>Контакты</Heading>
            <Text mt={'1.5rem'}>
                Если у вас есть вопросы, напишите их на почту:
            </Text>
            <Text ml={'1.25rem'} mt={'0.5rem'}>
                <Highlight
                    query={'balkunov.s@mail.ru'}
                    styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
                    >
                    balkunov.s@mail.ru
                </Highlight>
            </Text>
            <Text mt={'1rem'}>
                Контактный номер телефона:
            </Text>
            <Text ml={'1.25rem'} mt={'0.5rem'}>
                <Highlight
                    query={'+7(900)-994-35-34'}
                    styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
                >
                    +7(900)-994-35-34
                </Highlight>
            </Text>
        </Box>
    );
};

export default ContactsPage;