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
    VStack,
    Center
} from "@chakra-ui/react";

const PartInCart = ({ part }) => {
    const { onRemovePart, toggleCartPartQuantity, setShowCart } = useStateContext();

    return (
        <Flex key={part.slug} w={{ base: '92vw', sm: '48vw', lg: '30vw'}} h={{ base: '28vw', sm: '18vw', md: '16vw', lg: '10vw'}} mt={'5px'}>
            <Box rounded={'0.5rem'} w={{ base: '27vw', sm: '17vw', md: '15vw', lg: '9vw'}} h={{ base: '27vw', sm: '17vw', md: '15vw', lg: '9vw' }}
                 m={'0.5vw'} outline={'solid 2px red'} outlineColor={'red'} position={'relative'}>
                <Center bgColor={'red'} position={'absolute'} p={'0!important'} cursor={'pointer'} rounded={'0.5rem'}
                        left={'0'} top={'0'} zIndex={'1000'} onClick={ () => onRemovePart(part) }
                        w={{ base: '6vw', sm: '4vw', md: '3vw', lg: '2vw' }}
                        h={{ base: '6vw', sm: '4vw', md: '3vw', lg: '2vw' }}
                >
                    <TiDeleteOutline color={'white'}/>
                </Center>
                <Link href={`/parts/${part.slug}`}>
                    <Image
                        onClick={ () => setShowCart(false) }
                        src={ part.images[0]?.image ? part.images[0].image : DefaultItemImage.src }
                        w={{ base: '27vw', sm: '17vw', md: '15vw', lg: '9vw'}}
                        h={{ base: '27vw', sm: '17vw', md: '15vw', lg: '9vw'}}
                        rounded={'0.5rem'}
                    />
                </Link>
            </Box>
            <VStack m={['0.5vw']} h={{ base: '26vw', sm: '17vw', md: '15vw', lg: '9vw'}} w={{ base: '63vw', sm: '29vw', md: '31vw', lg: '19vw' }} align={'start'}>
                <Box
                    align={'start'}
                    w={{ base: '63vw', sm: '29vw', md: '31vw', lg: '19vw'}}
                    h={{ base: '15vw', sm: '11vw', md: '9vw', lg: '5vw' }}
                    p={{ base: '0'}}
                >
                    <Heading fontSize={['0.9rem', '0.90rem', '1.15rem', '1.2rem', '1.25rem', '1.35rem']}>{ part.title }</Heading>
                    <Text fontSize={['0.9rem', '1.15rem']}>{ part.price } ₽</Text>
                </Box>
                <Box m={'0!important'} w={{ base: '63vw', sm: '29vw', md: '31vw', lg: '19vw' }} h={{ base: '12vw', sm: '8vw', md: '6vw', lg: '4vw' }}>
                    <Flex m={{ base: '2vw', sm: '1.5vw', md: '1vw', lg: '0.5vw', xl: '1.25vw' }}>
                        <Center bgColor={'gray.200'} rounded={'0.5rem'}
                                w={{ base: '8vw', sm: '5vw', md: '4vw', lg: '3vw', xl: '2.5vw' }}
                                h={{ base: '8vw', sm: '5vw', md: '4vw', lg: '3vw', xl: '2.5vw' }}
                                cursor={'pointer'} onClick={ () => toggleCartPartQuantity(part.slug, 'dec') }
                        >-</Center>
                        <Center rounded={'0.5rem'} bgColor={'blue.200'}
                                w={{ base: '8vw', sm: '5vw', md: '4vw', lg: '3vw', xl: '2.5vw' }}
                                h={{ base: '8vw', sm: '5vw', md: '4vw', lg: '3vw', xl: '2.5vw' }}
                            >{ part.quantity }</Center>
                        <Center bgColor={'gray.200'} rounded={'0.5rem'}
                                w={{ base: '8vw', sm: '5vw', md: '4vw', lg: '3vw', xl: '2.5vw' }}
                                h={{ base: '8vw', sm: '5vw', md: '4vw', lg: '3vw', xl: '2.5vw' }}
                                cursor={'pointer'} onClick={ () => toggleCartPartQuantity(part.slug, 'inc') }
                        >+</Center>
                    </Flex>
                </Box>
            </VStack>
        </Flex>
    );
};
export default PartInCart;
