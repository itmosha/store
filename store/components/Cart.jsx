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
                w={{ base: '100vw', sm: '50vw', lg: '32vw'}}
                float={['none', 'right']}
                p={{ base: '4vw', sm: '1vw'}}
                align={'start'}
            >
                <Box w={{ base: '92vw', sm: '48vw', lg: '30vw'}}>
                    <Flex pb={'0.5rem'}>
                        <Button onClick={ () => setShowCart(false) }>
                            <AiOutlineRight />
                        </Button>
                        <Center ml={'15px'}>
                            <Heading fontSize={['0.9rem', '0.90rem', '1.15rem', '1.2rem', '1.25rem', '1.5rem']} fontWeight={'600'}>Ваша корзина</Heading>
                        </Center>
                        <Center ml={'10px'}>
                            <Text bgColor={'red.100'} fontSize={['0.9rem', '0.65rem', '1.05rem', '0.70rem', '0.90rem', '1.1rem']} mt={'0.35rem'} borderRadius={'full'} px={'7px'}>
                            { totalQuantities } товаров
                            </Text>
                        </Center>
                    </Flex>
                    { totalQuantities < 1 && (
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
                        w={{ base: '92vw', sm: '48vw', lg: '30vw'}}
                        p={['3vw 4vw', '0.5rem 1rem']}
                        rounded={['0.5rem']}
                    >
                        <Flex>
                            <Heading fontSize={['0.9rem', '1rem', '1.15rem', '1.2rem', '1.25rem', '1.5rem']}>Сумма заказа: </Heading>
                            <Heading fontSize={['0.9rem', '1rem', '1.15rem', '1.2rem', '1.25rem', '1.5rem']} fontWeight={'500'} bgColor={'red.100'} mx={'0.5rem'} borderRadius={'full'} py={'0.25rem'} px={'0.5rem'}>{ totalPrice } ₽</Heading>
                        </Flex>
                        <Box align={'center'}>
                            <Link href={'/cart/'}>
                                <Button
                                    my={'10px'}
                                    colorScheme={'blue'}
                                    h={['10vw', '2.5rem']}
                                    onClick={ () => setShowCart(false) }
                                >
                                    <Heading fontSize={{ sm: '1rem', lg: '1.15rem' }} fontWeight={'500'}>
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