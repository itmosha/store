import React from 'react';
import DefaultPresentImage from "../public/default_present.png";
import Link from "next/link";
import { TiDeleteOutline } from "react-icons/ti";
import { useStateContext } from "../context/StateContext";
import {
    Box,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Text,
    VStack
} from "@chakra-ui/react";

const ItemInCart = ({ item }) => {
    const { toggleCartItemQuantity, onRemove, setShowCart } = useStateContext();
    return (
        <Flex key={item.slug} w={['92vw', '29rem']} h={['28vw', '10rem']}>
            <Link href={`/product/${item.slug}`}>
                <Box borderWidth={'2px'} borderColor={'red'} borderRadius={'1rem'} w={['27vw', '9rem']}
                    onClick={ () => setShowCart(false) }>
                    <Image
                        src={ item.images[0]?.image ? item.images[0].image : DefaultPresentImage.src }
                        w={['26vw', '9rem']}
                        h={['26vw', '9rem']}
                    />
                </Box>
            </Link>
            <VStack ml={['2vw', '0.5rem']} h={['28vw', '10rem']}>
                <Box
                    align={'start'}
                    w={['62vw', '18.5rem']}
                    h={['18vw', '5.5rem']}
                    p={['1vw 0', '0.25rem']}
                >
                    <Heading fontSize={['1rem', '1.25rem']}>{ item.title }</Heading>
                    <Text fontSize={['0.9rem', '1.15rem']}>{ item.price } ₽</Text>
                </Box>
                <Box
                    w={['62vw', '18.5rem']}
                    h={['10vw', '3.5rem']}
                >
                    <Flex
                        w={['62vw', '18.5rem']}
                        h={['10vw', '3.5rem']}
                    >
                        <Box
                             w={['40vw', '10rem']}
                             h={['10vw', '3rem']}
                             px={['1vw', '0.5vw', '0', '1.25rem']}
                             py={['0', '0.25rem']}
                        >
                            <Flex h={['10vw', '3rem']}>
                                {/*<Button*/}
                                {/*    w={['8vw', '2.5rem']} h={['8vw', '2.5rem']} onClick={ () => toggleCartItemQuantity(item.slug, 'dec') }>*/}
                                {/*    <Heading pb={'5px'} fontSize={'1.25rem'}>*/}
                                {/*        -*/}
                                {/*    </Heading>*/}
                                {/*</Button>*/}
                                {/*<Center minW={['8vw', '2.5rem']} h={['8vw', '2.5rem']} borderRadius={'0.35rem'} borderWidth={'2px'} borderColor={'red.200'}>*/}
                                {/*    <Heading fontSize={'1rem'}>*/}
                                {/*        { item.quantity }*/}
                                {/*    </Heading>*/}
                                {/*</Center>*/}
                                {/*<Button w={['8vw', '2.5rem']} h={['8vw', '2.5rem']} onClick={ () => toggleCartItemQuantity(item.slug, 'inc') }>*/}
                                {/*    <Heading pb={'5px'} fontSize={'1.25rem'}>*/}
                                {/*        +*/}
                                {/*    </Heading>*/}
                                {/*</Button>*/}
                                <Button ml={['1vw']} w={['8vw', '2.5rem']} h={['8vw', '2.5rem']} p={'0'} onClick={ () => onRemove(item) }>
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