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
        <Box>
            <Heading fontSize={'30px'}>Доставка</Heading>
            <Heading fontSize={'18px'} mt={'2rem'}>Доставка по Санкт-Петербургу</Heading>
            <Text mt={'0.5rem'}>По Санкт-Петербургу возможна доставка курьером</Text>
            <Box ml={'1.25rem'} mt={'0.5rem'}>
                <UnorderedList lineHeight={'1.65'}>
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
            <Heading fontSize={'18px'} mt={'2rem'}>Доставка курьерской службой "СДЭК"</Heading>
            <Text mt={'0.5rem'}>Доставка осуществлется по всей территории РФ</Text>
            <Box ml={'1.25rem'} mt={'0.5rem'}>
                <UnorderedList lineHeight={'1.65'}>
                    <ListItem>
                        <Highlight
                            query={'исходя из тарифов'}
                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
                        >
                            Стоимость доставки рассчитывается исходя из тарифов СДЭК
                        </Highlight>
                    </ListItem>
                    <ListItem>Время доставки - от двух до пяти дней с момента отправки</ListItem>
                </UnorderedList>
            </Box>
            <Heading fontSize={'18px'} mt={'2rem'}>Доставка Почтой России</Heading>
            <Text mt={'0.5rem'}>Доставка осуществлется по всей территории РФ</Text>
            <Box ml={'1.25rem'} mt={'0.5rem'}>
                <UnorderedList lineHeight={'1.65'}>
                    <ListItem>
                        <Highlight
                            query={'исходя из тарифов'}
                            styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
                        >
                            Стоимость доставки рассчитывается исходя из тарифов Почты России
                        </Highlight>
                    </ListItem>
                    <ListItem>Время доставки - около двух недель</ListItem>
                </UnorderedList>
            </Box>
        </Box>
    );
};

export default DeliveryPage;
