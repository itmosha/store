import React from 'react';
import DefaultPresentImage from "../public/default_present.png";
import { TiDeleteOutline } from "react-icons/ti";
import { useStateContext } from "../context/StateContext";
import { Box, Button, Center, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

const ItemInCart = ({ item }) => {
    const { toggleCartItemQuantity, onRemove, setShowCart } = useStateContext();
    return (
        <Flex p={'0.5rem'} key={item.slug} w={'29rem'} h={'10rem'}>
            <Link href={`/product/${item.slug}`}>
                <Box borderWidth={'2px'} borderColor={'red'} borderRadius={'1rem'}
                    onClick={ () => setShowCart(false) }>
                    <Image
                        src={ item.images[0]?.image ? item.images[0].image : DefaultPresentImage.src }
                        w={'9rem'}
                        h={'9rem'}
                    />
                </Box>
            </Link>
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

    );
};

export default ItemInCart;