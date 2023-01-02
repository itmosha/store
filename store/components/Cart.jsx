import React from 'react';
import Link from 'next/link';
import { AiOutlineRight, AiOutlineShopping } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { useStateContext } from "../context/StateContext";
import DefaultPresentImage from '../public/default_present.png';
import {
    Box,
    Button,
    Center,
    Divider,
    Flex,
    Heading,
    Image,
    Text,
    VStack
} from '@chakra-ui/react';

const Cart = () => {
    const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();

    return (
        <Box w={'100vw'} bg={'rgba(0, 0, 0, 0.5)'} position={'fixed'} top={'0'} left={'0'} zIndex={'100'}>
            <VStack h={'100vh'} width={'32rem'} float={'right'} p={'1.5rem'} bgColor={'white'} justify={'space-between'}>
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
                        <Center mt={'5rem'} display={'block'}>
                            <AiOutlineShopping size={'6rem'} />
                            <Heading fontSize={'1.25rem'} pt={'0.5rem'}>Ваша корзина пуста</Heading>
                            <Link href={'/'}>
                                <Button varitan={'solid'} colorScheme={'red'} size={'lg'} mt={'1rem'} onClick={ () => setShowCart(false) }>
                                    Посмотреть товары
                                </Button>
                            </Link>
                        </Center>
                    )}
                    <Divider borderWidth={'2px'} borderColor={'gray.300'} mb={'1rem'} mt={'0.5rem'}/>
                <Box mt={'1rem'} maxH={'68vh'} overflowY={'auto'}>
                    { cartItems.length >= 1 && cartItems.map((item) => (
                        <Flex p={'0.5rem'} key={item.slug} w={'29rem'} h={'10rem'}>
                            <Box borderWidth={'2px'} borderColor={'red'} borderRadius={'1rem'}>
                                <Image
                                    src={ item.images[0]?.image ? item.images[0].image : DefaultPresentImage.src }
                                    w={'9rem'}
                                    h={'9rem'}
                                />
                            </Box>
                            <VStack ml={'0.5rem'}>
                                <Box
                                    w={'18.5rem'}
                                    h={'5.5rem'}
                                    align={'start'}
                                    p={'0.25rem'}
                                >
                                    <Heading fontSize={'1.5rem'}>{ item.title }</Heading>
                                    <Text fontSize={'1.15rem'}>{ item.price } ₽</Text>
                                </Box>
                                <Box
                                    w={'18.5rem'}
                                    h={'3.5rem'}
                                >
                                    <Flex w={'18.5rem'}>
                                        <Box w={'10rem'}
                                             h={'3rem'}
                                             px={'1.25rem'}
                                             py={'0.25rem'}
                                        >
                                            <Flex>
                                                <Button w={'2.5rem'} h={'2.5rem'} onClick={ () => toggleCartItemQuantity(item.slug, 'dec') }>
                                                    <Heading fontSize={'0.75rem'}>
                                                        —
                                                    </Heading>
                                                </Button>
                                                <Center w={'2.5rem'} h={'2.5rem'} borderRadius={'0.35rem'} borderWidth={'2px'} borderColor={'red.200'}>
                                                    <Heading fontSize={'1rem'}>
                                                        { item.quantity }
                                                    </Heading>
                                                </Center>
                                                <Button w={'2.5rem'} h={'2.5rem'} onClick={ () => toggleCartItemQuantity(item.slug, 'inc') }>
                                                    <Heading fontSize={'1.25rem'}>
                                                        +
                                                    </Heading>
                                                </Button>
                                            </Flex>
                                        </Box>
                                        <Box w={'8rem'}
                                             h={'3rem'}
                                             ml={'0.5rem'}
                                             px={'2.75rem'}
                                             py={'0.25rem'}
                                        >
                                            <Button w={'2.5rem'} h={'2.5rem'} p={'0'} onClick={ () => onRemove(item) }>
                                                <TiDeleteOutline size={'1.5rem'}/>
                                            </Button>
                                        </Box>
                                    </Flex>
                                </Box>
                            </VStack>
                        </Flex>
                    ))}
                </Box>
                </Box>

                { cartItems.length >= 1 && (
                    <Box bgColor={'gray.100'} w={'29rem'} h={'7rem'} mt={'0.5rem'} p={'0.5rem 1rem'} align={'start'} borderRadius={'1rem'}>
                        <Flex>
                            <Heading fontSize={'2rem'}>Сумма заказа: </Heading>
                            <Heading fontSize={'1.5rem'} fontWeight={'400'} bgColor={'red.100'} m={'0.25rem 0.5rem 0 0.5rem'} borderRadius={'full'} py={'0.25rem'} px={'0.5rem'}>{ totalPrice } ₽</Heading>
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