import React from 'react';
import Link from 'next/link';
import { AiOutlineRight, AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";
import {
    Box,
    Button,
    Center,
    Flex,
    Heading,
    Text,
    VStack
} from '@chakra-ui/react';
import ItemInCart from "./ItemInCart";

const Cart = () => {
    const { totalPrice, totalQuantities, cartItems, setShowCart } = useStateContext();

    return (
        <Box w={'100vw'} bg={'rgba(0, 0, 0, 0.5)'} position={'fixed'} top={'0'} left={'0'} zIndex={'100'} align={'center'}>
            <VStack h={'100vh'} width={'32rem'} float={'right'} p={'1.5rem'} bgColor={'white'} justify={'space-between'} align={'start'}>
                <Box>
                    <Flex>
                        <Button onClick={ () => setShowCart(false) }>
                            <AiOutlineRight />
                        </Button>
                        <Center ml={'1rem'}>
                            <Heading fontSize={'1.5rem'}>Ваша корзина</Heading>
                        </Center>
                        <Center ml={'0.5rem'}>
                            <Text bgColor={'red.100'} fontSize={'1rem'} mt={'0.35rem'} borderRadius={'full'} px={'2'}>
                            { totalQuantities } товаров
                            </Text>
                        </Center>
                    </Flex>
                    { cartItems.length < 1 && (
                        <Box mt={'5rem'} mx={'6.5rem'}>
                            <AiOutlineShopping size={'6rem'} />
                            <Heading fontSize={'1.25rem'} pt={'0.5rem'}>Ваша корзина пуста</Heading>
                            <Link href={'/'}>
                                <Button varitan={'solid'} colorScheme={'red'} size={'lg'} w={'16rem'} mt={'1rem'} onClick={ () => setShowCart(false) }>
                                    Посмотреть товары
                                </Button>
                            </Link>
                        </Box>
                    )}
                <Box mt={'1rem'} maxH={'68vh'} overflowY={'auto'}>
                    { cartItems.length >= 1 && cartItems.map((item) => (
                        <ItemInCart item={item}/>
                    ))}
                </Box>
                </Box>

                { cartItems.length >= 1 && (
                    <Box bgColor={'gray.100'} w={'29rem'} h={'7rem'} mt={'0.5rem'} p={'0.5rem 1rem'} align={'start'} borderRadius={'1rem'}>
                        <Flex>
                            <Heading fontSize={'1.5rem'}>Сумма заказа: </Heading>
                            <Heading fontSize={'1.5rem'} fontWeight={'400'} bgColor={'red.100'} mx={'0.5rem'} borderRadius={'full'} py={'0.25rem'} px={'0.5rem'}>{ totalPrice } ₽</Heading>
                        </Flex>
                        <Box>
                            <Link href={'/cart/'}>
                                <Button colorScheme={'red'} w={'15rem'} h={'2.5rem'} m={'0.75rem 6.5rem 0.5rem 6.5rem'}>
                                    <Heading fontSize={'18px'}>
                                        Оформить заказ
                                    </Heading>
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                ) }
            </VStack>
        </Box>
    )
}

export default Cart