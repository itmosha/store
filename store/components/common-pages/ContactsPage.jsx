import React from 'react';
import {
    Box,
    Text,
    Heading,
    Highlight
} from '@chakra-ui/react';

const ContactsPage = () => {
    return (
        <Box p={['0', '0.5rem']}>
            <Heading fontSize={['1.5rem', '1.75rem']}>Контакты</Heading>
            <Text mt={['15px', '1.5rem']} fontSize={['0.90rem', '1rem']}>
                Если у вас есть вопросы, напишите их на почту:
            </Text>
            <Text ml={['4vw', '1.25rem']} mt={['5px', '0.5rem']} fontSize={['0.9rem', '1rem']}>
                <Highlight
                    query={'balkunov.s@mail.ru'}
                    styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
                    >
                    balkunov.s@mail.ru
                </Highlight>
            </Text>
            <Text mt={['10px', '1rem']} fontSize={['0.90rem', '1rem']}>
                Контактный номер телефона:
            </Text>
            <Text ml={['4vw', '1.25rem']} mt={['5px', '0.5rem']} fontSize={['0.90rem', '1rem']}>
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