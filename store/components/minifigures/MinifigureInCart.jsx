import React from 'react';
import DefaultItemImage from "../../public/DefaultLegoSetImage.png";
import Link from "next/link";
import { TiDeleteOutline } from "react-icons/ti";
import { useStateContext } from "../../context/StateContext";
import {
    Box,
    Button, Center,
    Flex,
    Heading,
    Image,
    Text,
    VStack
} from "@chakra-ui/react";

const MinifigureInCart = ({ minifigure }) => {
    const { onRemoveMinifigure, setShowCart } = useStateContext();

    return (
        <Flex key={minifigure.slug} w={{ base: '92vw', sm: '48vw', lg: '30vw'}} h={{ base: '28vw', sm: '18vw', md: '16vw', lg: '10vw'}} mt={'5px'}>
            <Box rounded={'0.5rem'} w={{ base: '27vw', sm: '17vw', md: '15vw', lg: '9vw'}} h={{ base: '27vw', sm: '17vw', md: '15vw', lg: '9vw' }}
                 m={'0.5vw'} outline={'solid 2px red'} outlineColor={'red'} position={'relative'}>
                <Center bgColor={'red'} position={'absolute'} p={'0!important'} cursor={'pointer'} rounded={'0.5rem'}
                        left={'0'} top={'0'} zIndex={'1000'} onClick={ () => onRemoveMinifigure(minifigure) }
                        w={{ base: '6vw', sm: '4vw', md: '3vw', lg: '2vw' }}
                        h={{ base: '6vw', sm: '4vw', md: '3vw', lg: '2vw' }}
                >
                    <TiDeleteOutline color={'white'}/>
                </Center>
                <Link href={`/parts/${minifigure.slug}`}>
                    <Image
                        onClick={ () => setShowCart(false) }
                        src={ minifigure.images[0]?.image ? minifigure.images[0].image : DefaultItemImage.src }
                        w={{ base: '27vw', sm: '17vw', md: '15vw', lg: '9vw'}}
                        h={{ base: '27vw', sm: '17vw', md: '15vw', lg: '9vw'}}
                        rounded={'0.5rem'}
                    />
                </Link>
            </Box>
            <Box
                align={'start'}
                w={{ base: '63vw', sm: '29vw', md: '31vw', lg: '19vw'}}
                h={{ base: '26vw', sm: '17vw', md: '15vw', lg: '9vw'}}
                p={{ base: '0'}}
            >
                <Heading fontSize={['0.9rem', '0.90rem', '1.15rem', '1.2rem', '1.25rem', '1.35rem']}>{ minifigure.title }</Heading>
                <Text fontSize={['0.9rem', '1.15rem']}>{ minifigure.price } ₽</Text>
            </Box>
        </Flex>
    );
};
export default MinifigureInCart;
