import React from 'react';
import {
    Box,
    Text,
    Heading,
    UnorderedList,
    ListItem,
    Highlight
} from '@chakra-ui/react';

const DeliveryPage = () => {
    return (
        <Box p={['0', '0.5rem']}>
            <Heading fontSize={['1.5rem', '1.75rem']}>Доставка</Heading>
            <Heading fontSize={['1rem', '1.25rem']} mt={['20px', '2rem']}>Доставка по Санкт-Петербургу</Heading>
            <Text fontSize={['0.90rem', '1rem']} mt={['5px', '0.5rem']}>По Санкт-Петербургу возможна доставка курьером</Text>
            <Box ml={['20px', '1.25rem']} mt={['5px', '0.5rem']}>
                <UnorderedList fontSize={['0.90rem', '1rem']} lineHeight={['1.5', '1.65']}>
                    <ListItem>
                        <Highlight
                            query={'100 рублей'}
                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
                            >
                            Стоимость доставки - 100 рублей
                        </Highlight>
                    </ListItem>
                    <ListItem>Время доставки - в течение трёх дней</ListItem>
                </UnorderedList>
            </Box>
            <Heading fontSize={['1rem', '1.25rem']} mt={['20px', '2rem']}>Доставка курьерской службой "СДЭК"</Heading>
            <Text fontSize={['0.90rem', '1rem']} mt={['5px', '0.5rem']}>Доставка осуществлется по всей территории РФ</Text>
            <Box ml={['20px', '1.25rem']} mt={['5px', '0.5rem']}>
                <UnorderedList fontSize={['0.90rem', '1rem']} lineHeight={['1.5', '1.65']}>
                    <ListItem>
                        <Highlight
                            query={'250 рублей'}
                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
                        >
                            Стоимость доставки - 250 рублей
                        </Highlight>
                    </ListItem>
                    <ListItem>Время доставки - от двух до пяти дней с момента отправки</ListItem>
                </UnorderedList>
            </Box>
            <Heading fontSize={['1rem', '1.25rem']} mt={['20px', '2rem']}>Доставка Почтой России</Heading>
            <Text fontSize={['0.90rem', '1rem']} mt={['5px', '0.5rem']}>Доставка осуществлется по всей территории РФ</Text>
            <Box ml={['20px', '1.25rem']} mt={['5px', '0.5rem']}>
                <UnorderedList fontSize={['0.90rem', '1rem']} lineHeight={['1.5', '1.65']}>
                    <ListItem>
                        <Highlight
                            query={'250 рублей'}
                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
                        >
                            Стоимость доставки - 250 рублей
                        </Highlight>
                    </ListItem>
                    <ListItem>Время доставки - около двух недель</ListItem>
                </UnorderedList>
            </Box>
        </Box>
    );
};

export default DeliveryPage;
