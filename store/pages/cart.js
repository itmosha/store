import React from 'react';
import Link from 'next/link';
import CommonHeader from "../components/CommonHeader";
import Footer from "../components/Footer";
import SPbDeliveryForm from "../components/forms/SPbDeliveryForm";
import SDEKForm from "../components/forms/SDEKForm";
import PochtaForm from "../components/forms/PochtaForm";
import { useStateContext } from "../context/StateContext";
import {
    Box,
    Flex,
    Heading,
    Button,
    Checkbox,
    Stack,
    Text,
    Divider
} from '@chakra-ui/react';
import LegoSetInCart from "../components/legoSets/legoSetInCart";
import MinifigureInCart from "../components/minifigures/MinifigureInCart";
import PartInCart from "../components/parts/PartInCart";

const CartPage = () => {
    const { totalPrice, totalQuantities, cartLegoSets, cartMinifigures, cartParts } = useStateContext();
    const [ checkedCheckbox, setCheckedCheckbox ] = React.useState(1);

    return (
        <Box>
            <CommonHeader />
            <Box minH={'85vh'} p={'0'}>
                { totalQuantities > 0 ? (
                    <Box w={['96vw', '80vw']} mt={'15px'} mx={['2vw', '10vw']}>
                        <Box align={'center'}>
                            <Heading fontSize={['1.5rem', '2rem']} pb={['10px', '1.5rem']}>Оформление заказа</Heading>
                        </Box>
                        <Flex direction={['column', 'row']}>
                            <Box p={['15px', '1rem']} w={['96vw', '40vw']} borderRadius={'1rem'} h={'fit-content'} boxShadow={'0px 3px 10px 2px rgba(0, 0, 0, 0.5)'}>
                                <Heading fontSize={['1.25rem', '1.5rem']} pb={'10px'}>Список товаров</Heading>
                                <Box>
                                    { cartLegoSets.length >= 1 && cartLegoSets.map((cartLegoSet) => (
                                        <LegoSetInCart legoSet={cartLegoSet} />
                                    ))}
                                    { cartMinifigures.length >= 1 && cartMinifigures.map((cartMinifigure) => (
                                        <MinifigureInCart minifigure={cartMinifigure} />
                                    ))}
                                    { cartParts.length >= 1 && cartParts.map((cartPart) => (
                                        <PartInCart part={cartPart} />
                                    ))}
                                </Box>
                            </Box>
                            <Box ml={['0', '1vw']} mt={['15px', '0']} w={['auto', '40vw']}>
                                <Box p={['15px', '1rem']} borderRadius={'1rem'} boxShadow={'0px 3px 10px 2px rgba(0, 0, 0, 0.5)'}>
                                    <Heading fontSize={['1.25rem', '1.5rem']} mb={'10px'}>Способ доставки: </Heading>
                                    <Stack spacing={'3px'}>
                                        <Checkbox colorScheme={'blue'} defaultChecked
                                                  isChecked={ checkedCheckbox === 1 }
                                                  onChange={ () => setCheckedCheckbox(1) }
                                        >Курьером по Санкт-Петербургу</Checkbox>
                                        {/*<Checkbox colorScheme={'blue'}*/}
                                        {/*          isChecked={ checkedCheckbox === 2 }*/}
                                        {/*          onChange={ () => setCheckedCheckbox(2) }*/}
                                        {/*>Курьерской службой СДЭК</Checkbox>*/}
                                        <Checkbox colorScheme={'blue'}
                                                  isChecked={ checkedCheckbox === 3 }
                                                  onChange={ () => setCheckedCheckbox(3) }
                                        >Почтой России</Checkbox>
                                    </Stack>
                                </Box>
                                <Box p={['15px', '1rem']} mt={'1rem'} borderRadius={'1rem'} boxShadow={'0px 3px 10px 2px rgba(0, 0, 0, 0.5)'}>
                                    <Heading fontSize={['1.25rem', '1.5rem']} mb={'5px'}>Сумма заказа</Heading>
                                    <Flex justify={'space-between'}>
                                        <Text>Товары</Text>
                                        <Text>{ totalPrice } ₽</Text>
                                    </Flex>
                                    <Flex justify={'space-between'}>
                                        <Text>Доставка</Text>
                                        { checkedCheckbox === 1 ? (
                                            <Text>100 ₽</Text>
                                        ) : (
                                            <Text>250 ₽</Text>
                                        )}
                                    </Flex>
                                    <Divider borderColor={'gray.500'} my={'10px'}/>
                                    <Flex justify={'space-between'}>
                                        <Heading fontSize={'1rem'}>Итого</Heading>
                                        <Heading fontSize={'1rem'}>{ totalPrice + (checkedCheckbox === 1 ? 100 : 250)} ₽</Heading>
                                    </Flex>
                                </Box>
                                <Box align={'center'} p={['15px', '1rem']} mt={'1rem'} borderRadius={'1rem'} boxShadow={'0px 3px 10px 2px rgba(0, 0, 0, 0.5)'}>
                                    <Heading fontSize={['1.25rem', '1.5rem']} mb={['10px', '1rem']} align={'start'}>Информация клиента</Heading>
                                    { checkedCheckbox === 1 ? ( <SPbDeliveryForm /> ) : ( checkedCheckbox === 2 ? ( <SDEKForm /> ) : ( <PochtaForm /> ) ) }
                                </Box>
                            </Box>
                        </Flex>
                    </Box>
                ) : (
                    <Box bgColor={'gray.200'} w={['96vw', '52vw']} p={['2vw 3vw', '1vw']} borderRadius={'1rem'} boxShadow={'0px 3px 10px 2px rgba(0, 0, 0, 0.5)'} m={['2vw', '1vw 24vw']} align={'center'}>
                        <Heading fontSize={['1rem', '1.25rem']} fontWeight={'500'}>Список товаров пуст</Heading>
                        <Heading fontSize={['0.90rem', '1.25rem']} fontWeight={'500'}>Перейдите в каталог чтобы добавить товары</Heading>
                        <Link href={'/'}>
                            <Button variant={'solid'} colorScheme={'blue'} w={['64vw', '16rem']} m={['2vw 0', '1.5rem 7rem 0.5rem 7rem']}>
                                Перейти в каталог
                             </Button>
                        </Link>
                    </Box>
                )}
            </Box>
            <Footer />
        </Box>
    );
};

export default CartPage;