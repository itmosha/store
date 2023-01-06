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
            <VStack
                h={'100vh'}
                bgColor={'white'}
                justify={'space-between'}
                w={{ base: '100vw', sm: '32rem'}}
                float={{ base: 'none', sm: 'right' }}
                p={{ base: '4vw', sm: '1rem' }}
                align={{ base: 'center', sm: 'start'}}
            >
                <Box w={{ base: '92vw' }}>
                    <Flex pb={'0.5rem'}>
                        <Button onClick={ () => setShowCart(false) }>
                            <AiOutlineRight />
                        </Button>
                        <Center ml={'15px'}>
                            <Heading fontSize={['1.25rem', '1.5rem']}>Ваша корзина</Heading>
                        </Center>
                        <Center ml={'10px'}>
                            <Text bgColor={'red.100'} fontSize={['0.9rem', '0.95rem', '1.05rem', '1.10rem', '1.15rem']} mt={'0.35rem'} borderRadius={'full'} px={'7px'}>
                            { totalQuantities } товаров
                            </Text>
                        </Center>
                    </Flex>
                    { cartItems.length < 1 && (
                        <Box w={{ base: '92vw' }} mx={{ base: '0vw' }}>
                            <AiOutlineShopping size={'6rem'} />
                            <Heading fontSize={'1.25rem'} pt={'0.5rem'}>Ваша корзина пуста</Heading>
                            <Link href={'/'}>
                                <Button varitan={'solid'} colorScheme={'red'} w={{ base: '52vw' }} mt={'1rem'} onClick={ () => setShowCart(false) }>
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
                    <Box
                        bgColor={'gray.100'}
                        align={'start'}
                        w={['92vw', '29rem']}
                        h={['30vw', '7rem']}
                        p={['3vw 4vw', '0.5rem 1rem']}
                        borderRadius={['0.75rem', '1rem']}
                    >
                        <Flex>
                            <Heading fontSize={['1.25rem', '1.5rem']}>Сумма заказа: </Heading>
                            <Heading fontSize={['1.25rem', '1.5rem']} fontWeight={'400'} bgColor={'red.100'} mx={'0.5rem'} borderRadius={'full'} py={'0.25rem'} px={'0.5rem'}>{ totalPrice } ₽</Heading>
                        </Flex>
                        <Box>
                            <Link href={'/cart/'}>
                                <Button
                                    colorScheme={'red'}
                                    w={['64vw', '16rem']}
                                    h={['10vw', '']}
                                    m={['2vw 10vw', '']}
                                >
                                    <Heading fontSize={'1.25rem'} fontWeight={'500'}>
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