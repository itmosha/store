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
import LegoSetInCart from "./legoSets/legoSetInCart";
import MinifigureInCart from "./minifigures/MinifigureInCart";
import PartInCart from "./parts/PartInCart";

const Cart = () => {
    const { totalPrice, totalQuantities, cartLegoSets, cartMinifigures, cartParts, setShowCart } = useStateContext();

    return (
        <Box w={'100vw'} bg={'rgba(0, 0, 0, 0.5)'} position={'fixed'} top={'0'} left={'0'} zIndex={'100'} align={'center'}>
            <VStack
                h={'100vh'}
                bgColor={'white'}
                justify={'space-between'}
                w={['100vw', '32rem']}
                float={['none', 'right']}
                p={['4vw', '1rem']}
                align={['center', 'start']}
            >
                <Box w={['92vw', '30rem']}>
                    <Flex pb={'0.5rem'}>
                        <Button onClick={ () => setShowCart(false) }>
                            <AiOutlineRight />
                        </Button>
                        <Center ml={'15px'}>
                            <Heading fontSize={['1.25rem', '1.5rem']} fontWeight={'600'}>Ваша корзина</Heading>
                        </Center>
                        <Center ml={'10px'}>
                            <Text bgColor={'red.100'} fontSize={['0.9rem', '0.95rem', '1.05rem', '1.10rem', '1.15rem']} mt={'0.35rem'} borderRadius={'full'} px={'7px'}>
                            { totalQuantities } товаров
                            </Text>
                        </Center>
                    </Flex>
                    { totalQuantities  < 1 && (
                        <Box w={['92vw', '20rem']} mx={['0vw', '4rem']} mt={'2rem'}>
                            <AiOutlineShopping size={'6rem'} />
                            <Heading fontSize={'1.25rem'} pt={'0.5rem'}>Ваша корзина пуста</Heading>
                            <Link href={'/'}>
                                <Button varitan={'solid'} colorScheme={'blue'} w={['52vw', '20rem']} mt={'1rem'} onClick={ () => setShowCart(false) }>
                                    Посмотреть товары
                                </Button>
                            </Link>
                        </Box>
                    )}
                    <Box mt={'1rem'} maxH={'68vh'} overflowY={'auto'}>
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

                { totalQuantities >= 1 && (
                    <Box
                        bgColor={'gray.100'}
                        align={'start'}
                        w={['92vw', '30rem']}
                        h={['30vw', '6.5rem']}
                        p={['3vw 4vw', '0.5rem 1rem']}
                        borderRadius={['0.75rem', '1rem']}
                    >
                        <Flex>
                            <Heading fontSize={['1.20rem', '1.35rem']}>Сумма заказа: </Heading>
                            <Heading fontSize={['1.15rem', '1.25rem']} fontWeight={'400'} bgColor={'red.100'} mx={'0.5rem'} borderRadius={'full'} py={'0.25rem'} px={'0.5rem'}>{ totalPrice } ₽</Heading>
                        </Flex>
                        <Box>
                            <Link href={'/cart/'}>
                                <Button
                                    colorScheme={'blue'}
                                    w={['64vw', '16rem']}
                                    h={['10vw', '2.5rem']}
                                    m={['2vw 10vw', '0.5rem 6rem 0rem 6rem']}
                                    onClick={ () => setShowCart(false) }
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