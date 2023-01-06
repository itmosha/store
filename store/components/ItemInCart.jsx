import React from 'react';
import DefaultPresentImage from "../public/default_present.png";
import { TiDeleteOutline } from "react-icons/ti";
import { useStateContext } from "../context/StateContext";
import { Box, Button, Center, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

const ItemInCart = ({ item }) => {
    const { toggleCartItemQuantity, onRemove, setShowCart } = useStateContext();
    return (
        <Flex p={{ base: '0', sm: '0.5vw'}} key={item.slug} w={{ base: '92vw', sm: '29rem'}} h={{ base: '28vw', sm: '10rem' }}>
            <Link href={`/product/${item.slug}`}>
                <Box borderWidth={'2px'} borderColor={'red'} borderRadius={'1rem'} w={{ base: '27vw', sm: '9rem' }}
                    onClick={ () => setShowCart(false) }>
                    <Image
                        src={ item.images[0]?.image ? item.images[0].image : DefaultPresentImage.src }
                        w={{ base: '26vw', sm: '9rem' }}
                        h={{ base: '26vw', sm: '9rem' }}
                    />
                </Box>
            </Link>
            <VStack ml={['2vw', '0.5rem']} h={['28vw', '10rem']}>
                <Box
                    w={{ base: '62vw', sm: '18.5rem' }}
                    h={{ base: '18vw', sm: '5.5rem' }}
                    align={'start'}
                    p={{ base: '0vw', sm: '0.25rem' }}
                >
                    <Heading fontSize={['1.15rem', '1.5rem']}>{ item.title }</Heading>
                    <Text fontSize={['1rem', '1.15rem']}>{ item.price } ₽</Text>
                </Box>
                <Box
                    w={{ base: '62vw', sm: '18.5rem' }}
                    h={{ base: '10vw', sm: '3.5rem' }}
                >
                    <Flex
                        w={{ base: '62vw', sm: '18.5rem' }}
                        h={['10vw', '3.5rem']}
                    >
                        <Box
                             w={{ base: '40vw', sm: '10rem' }}
                             h={{ base: '10vw', sm: '3rem' }}
                             px={{ sm: '1.25rem' }}
                             py={{ sm: '0.25rem' }}
                        >
                            <Flex h={['10vw', '3rem']}>
                                <Button
                                    w={['8vw', '2.5rem']} h={['8vw', '2.5rem']} onClick={ () => toggleCartItemQuantity(item.slug, 'dec') }>
                                    <Heading pb={'5px'} fontSize={'1.25rem'}>
                                        -
                                    </Heading>
                                </Button>
                                <Center minW={['8vw', '2.5rem']} h={['8vw', '2.5rem']} borderRadius={'0.35rem'} borderWidth={'2px'} borderColor={'red.200'}>
                                    <Heading fontSize={'1rem'}>
                                        { item.quantity }
                                    </Heading>
                                </Center>
                                <Button w={['8vw', '2.5rem']} h={['8vw', '2.5rem']} onClick={ () => toggleCartItemQuantity(item.slug, 'inc') }>
                                    <Heading pb={'5px'} fontSize={'1.25rem'}>
                                        +
                                    </Heading>
                                </Button>
                                <Button ml={['15vw', '']} w={['8vw', '2.5rem']} h={['8vw', '2.5rem']} p={'0'} onClick={ () => onRemove(item) }>
                                    <TiDeleteOutline size={'1.5rem'}/>
                                </Button>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </VStack>
        </Flex>

    );
};

export default ItemInCart;