import React from 'react';
import DefaultItemImage from "../../public/DefaultLegoSetImage.png";
import Link from "next/link";
import { TiDeleteOutline } from "react-icons/ti";
import { useStateContext } from "../../context/StateContext";
import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Text,
    VStack
} from "@chakra-ui/react";

const MinifigureInCart = ({ minifigure }) => {
    const { onRemoveMinifigure, setShowCart } = useStateContext();

    return (
        <Flex key={minifigure.slug} w={['92vw', '29rem']} h={['28vw', '10rem']}>
            <Link href={`/minifigures/${minifigure.slug}`}>
                <Box borderWidth={'2px'} borderColor={'red'} borderRadius={'1rem'} w={['27vw', '9rem']}
                     onClick={ () => setShowCart(false) }>
                    <Image
                        src={ minifigure.images[0]?.image ? minifigure.images[0].image : DefaultItemImage.src }
                        w={['26vw', '9rem']}
                        h={['26vw', '9rem']}
                        borderRadius={'1rem'}
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
                    <Heading fontSize={['1rem', '1.25rem']}>{ minifigure.title }</Heading>
                    <Text fontSize={['0.9rem', '1.15rem']}>{ minifigure.price } ₽</Text>
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
                                <Button ml={['1vw']} w={['8vw', '2.5rem']} h={['8vw', '2.5rem']} p={'0'} onClick={ () => onRemoveMinifigure(minifigure) }>
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
export default MinifigureInCart;
