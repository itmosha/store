import React from 'react';
import Link from 'next/link';
import CommonHeader from "../components/CommonHeader";
import Footer from "../components/Footer";
import ItemInCart from "../components/ItemInCart";
import SPbDeliveryForm from "../components/forms/SPbDeliveryForm";
import { useStateContext } from "../context/StateContext";
import SDEKForm from "../components/forms/SDEKForm";
import PochtaForm from "../components/forms/PochtaForm";
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

const CartPage = () => {
    const { totalPrice, cartItems } = useStateContext();
    const [ checkedCheckbox, setCheckedCheckbox ] = React.useState(1);

    return (
        <Box>
            <CommonHeader />
            <Box minH={'85vh'} p={'2rem'}>
                { cartItems.length >= 1 ? (
                    <Box>
                        <Box align={'center'}>
                            <Heading fontSize={'2rem'} pb={'1.5rem'}>Оформление заказа</Heading>
                        </Box>
                        <Flex mx={'20rem'}>
                            <Box p={'1rem'} borderRadius={'1rem'} h={'fit-content'} w={'30rem'} boxShadow={'0px 3px 10px 2px rgba(0, 0, 0, 0.5)'}>
                                <Heading fontSize={'1.5rem'}>Список товаров</Heading>
                                <Box>
                                    { cartItems.length >= 1 && cartItems.map((item) => (
                                        <ItemInCart item={item} />
                                    ))}
                                </Box>
                            </Box>
                            <Box ml={'1rem'} width={'30rem'}>
                                <Box p={'1rem'} borderRadius={'1rem'} boxShadow={'0px 3px 10px 2px rgba(0, 0, 0, 0.5)'}>
                                    <Heading fontSize={'1.5rem'} mb={'0.5rem'}>Способ доставки: </Heading>
                                    <Stack spacing={'0.25rem'}>
                                        <Checkbox colorScheme={'red'} defaultChecked
                                                  isChecked={ checkedCheckbox === 1 }
                                                  onChange={ () => setCheckedCheckbox(1) }
                                        >Курьером по Санкт-Петербургу</Checkbox>
                                        <Checkbox colorScheme={'red'}
                                                  isChecked={ checkedCheckbox === 2 }
                                                  onChange={ () => setCheckedCheckbox(2) }
                                        >Курьерской службой СДЭК</Checkbox>
                                        <Checkbox colorScheme={'red'}
                                                  isChecked={ checkedCheckbox === 3 }
                                                  onChange={ () => setCheckedCheckbox(3) }
                                        >Почтой России</Checkbox>
                                    </Stack>
                                </Box>
                                <Box p={'1rem'} mt={'1rem'} borderRadius={'1rem'} boxShadow={'0px 3px 10px 2px rgba(0, 0, 0, 0.5)'}>
                                    <Heading fontSize={'1.5rem'} mb={'0.5rem'}>Сумма заказа</Heading>
                                    <Flex justify={'space-between'}>
                                        <Text>Товары</Text>
                                        <Text>{ totalPrice } ₽</Text>
                                    </Flex>
                                    <Flex justify={'space-between'}>
                                        <Text>Доставка</Text>
                                        { checkedCheckbox === 1 ? (
                                            <Text>100 ₽</Text>
                                        ) : (
                                            <Text>0 ₽</Text>
                                        )}
                                    </Flex>
                                    <Divider borderColor={'gray.500'} my={'0.5rem'}/>
                                    <Flex justify={'space-between'}>
                                        <Heading fontSize={'1rem'}>Итого</Heading>
                                        <Heading fontSize={'1rem'}>{ totalPrice + (checkedCheckbox === 1 ? 100 : 0)} ₽</Heading>
                                    </Flex>
                                </Box>
                                <Box p={'1rem'} mt={'1rem'} borderRadius={'1rem'} boxShadow={'0px 3px 10px 2px rgba(0, 0, 0, 0.5)'}>
                                    <Heading fontSize={'1.5rem'} mb={'1rem'}>Информация клиента</Heading>
                                    { checkedCheckbox === 1 ? ( <SPbDeliveryForm /> ) : ( checkedCheckbox === 2 ? ( <SDEKForm /> ) : ( <PochtaForm /> ) ) }
                                </Box>
                            </Box>
                        </Flex>
                    </Box>
                ) : (
                    <Box bgColor={'gray.200'} w={'32vw'} p={'1rem'} borderRadius={'1rem'} boxShadow={'0px 3px 10px 2px rgba(0, 0, 0, 0.5)'} mx={'33vw'}>
                        <Heading fontSize={'1.25rem'}>Список товаров пуст.</Heading>
                        <Heading fontSize={'1.25rem'}>Перейдите в каталог чтобы добавить товары</Heading>
                        <Link href={'/'}>
                            <Button variant={'solid'} colorScheme={'red'} w={'16rem'} m={'1.5rem 7rem 0.5rem 7rem'}>
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