import React from 'react';
import {
    Box,
    Text,
    Heading,
    UnorderedList,
    ListItem,
    Highlight
} from '@chakra-ui/react';

const ReturnPage = () => {
    return (
        <Box p={['0', '0.5rem']}>
            <Heading fontSize={['1.5rem', '1.75rem']}>Политика возврата</Heading>
            <Heading fontSize={['1rem', '1.25rem']} mt={['20px', '2rem']}>
                Возврат товара возможен при соблюдении следующих условий:
            </Heading>
            <Text fontSize={['0.90rem', '1rem']} mt={['10px', '1.5rem']}>
                <Highlight
                    query={'надлежащего'}
                    styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
                    >
                    1. Возврат товара надлежащего качества:
                </Highlight>
            </Text>
            <Box ml={['20px', '1.25rem']} mt={['5px', '0.5rem']} fontSize={['0.90rem', '1rem']}>
                <UnorderedList lineHeight={['1.3', '1.45']} pr={['2vw', '10rem']}>
                    <ListItem>
                        Клиент вправе отказаться от заказанного Товара в любое время до его получения,
                         а после получения Товара - в течение 7 (семи) дней, не считая дня покупки.
                    </ListItem>
                    <ListItem>
                        Возврат Товара надлежащего качества возможен в случае, если сохранены его товарный вид, потребительские
                        свойства, а также документ, подтверждающий факт и условия покупки указанного Товара.
                    </ListItem>
                    <ListItem>
                        Клиент не вправе отказаться от Товара, имеющего индивидуально-определенные свойства, если указанный
                        Товар может быть использован исключительно приобретающим его Клиентом.
                    </ListItem>
                    <ListItem>
                        При отказе Клиента от Товара надлежащего качества Продавец должен возвратить ему денежную сумму,
                        уплаченную потребителем по договору, за исключением расходов продавца на доставку от потребителя
                        возвращенного товара, не позднее чем через 10 дней со дня предъявления потребителем соответствующего требования.
                    </ListItem>
                </UnorderedList>
            </Box>
            <Text fontSize={['0.90rem', '1rem']} mt={['20px', '1.5rem']}>
                <Highlight
                    query={'ненадлежащего'}
                    styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
                >
                    2. Возврат товара ненадлежащего качества:
                </Highlight>
            </Text>
            <Text pr={['2vw', '10rem']} mt={['5px', '0.75rem']} fontSize={['0.9rem', '1rem']}>
                Под товаром ненадлежащего качества подразумевается товар, не способный обеспечить свои функциональные
                качества из-за существенного недостатка (с наличием дефектов/брака).
            </Text>
            <Text pr={['2vw', '10rem']} fontSize={['0.9rem', '1rem']}>
                Покупатель, которому продан товар ненадлежащего качества, если это не было оговорено продавцом,
                вправе по своему выбору заявить любое из нижеперечисленных требований:
            </Text>
            <Box ml={['20px', '1.25rem']} mt={['5px', '0.5rem']} fontSize={['0.90rem', '1rem']}>
                <UnorderedList lineHeight={['1.4', '1.45']} pr={['2vw', '15rem']}>
                    <ListItem>
                        замена на аналогичный товар с соответствующим перерасчётом покупной цены;
                    </ListItem>
                    <ListItem>
                        соразмерного уменьшения покупной цены;
                    </ListItem>
                    <ListItem>
                        безвозмездного устранения недостатков товара или возмещения расходов
                        на их исправление покупателем или третьим лицом;
                    </ListItem>
                    <ListItem>
                        вправе отказаться от исполнения договора и потребовать возврата уплаченной за товар суммы.
                    </ListItem>
                </UnorderedList>
            </Box>
            <Text mt={['10px', '1rem']} mr={['2vw', '10rem']} fontSize={['0.90rem', '1rem']}>
                Интернет-магазин вправе отказать в обмене или возврате товара, если сочтет, что обнаруженный
                существенный недостаток является следствием неправильной эксплуатации товара.
            </Text>
        </Box>
    );
};

export default ReturnPage;
