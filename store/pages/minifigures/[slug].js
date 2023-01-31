import React, { useState } from 'react';
import { useStateContext } from '../../context/StateContext';
import DefaultMinifigureImage from '../../public/DefaultLegoSetImage.png';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
    Box,
    Stack,
    Image,
    Flex,
    Heading,
    Text,
    Button,
    Center,
} from '@chakra-ui/react';

const MinifigureDetails = ({ minifigure }) => {
    const [ index, setIndex ] = useState(0);
    const { onAddMinifigure } = useStateContext();

    return (
        <Box minH={'90vh'}>
            <Navbar />

            <Box
                minH={'100vh'} w={'100vw'}
                display={['block']}
                p={{ base: '2vw', lg: '2vw 12vw'}}
            >
                <Box p={{ base: '10px 20px', lg: '0'}} >
                    <Heading fontSize={['1.5rem', '2rem']} fontWeight={['500']}>{ minifigure.title }</Heading>
                    <Text fontSize={['0.8rem', '1rem']} textColor={['blackAlpha.800']} pl={['3px']}>{ minifigure.sku }</Text>
                </Box>
                <Stack direction={{ base: 'column', lg: 'row'}} mt={{ base: '10px', lg: '20px' }}>
                    <Stack direction={{ base: 'column', lg: 'row'}}>
                        <Box w={{ base: '96vw', lg: '5vw' }} m={{ base: '0!important', lg: '0 1vw 0 0!important'}}>
                            { minifigure.images?.length > 0 && (
                                <Box>
                                    <Stack direction={{ base: 'row', lg: 'column' }}>
                                        { minifigure.images.map((item, i) => (
                                            <Image
                                                cursor={'pointer'}
                                                src={ minifigure.images[i].image }
                                                w={{ base: '15vw', lg: '5vw'}}
                                                h={{ base: '15vw', lg: '5vw'}}
                                                ml={['0.85vw!important']}
                                                onMouseDown={ () => setIndex(i) }
                                                border={'2px'}
                                                borderColor={ i === index ? 'blackAlpha.800!important' : 'blackAlpha.500'}
                                                borderRadius={'15px'}
                                                p={'5px'}
                                                _hover={{ borderColor: 'blackAlpha.600' }}
                                            />
                                        ))}
                                    </Stack>
                                </Box>
                            )}
                        </Box>
                        { minifigure.images.length > 0 ?
                            <Box w={{ base: '96vw', lg: '34vw'}}>
                                <Image
                                    src={ minifigure.images[index]?.image ? minifigure.images[index].image : (minifigure.images[0]?.image ? minifigure.images[0].image : DefaultMinifigureImage.src ) }
                                    w={{ base: '96vw', lg: '34vw'}}
                                />
                            </Box>
                            :
                            ''
                        }
                    </Stack>
                    <Box
                        w={{ base: '96vw', lg: '35vw' }} ml={{ base: '0', lg: '1rem'}}
                        h={'fit-content'}
                        p={{ base: '5vw', lg: '1.5vw'}}
                        boxShadow={'0px 7px 10px 1px rgba(0, 0, 0, 0.5)'}
                        borderRadius={'15px'}
                    >
                        <Heading fontWeight={'500'} fontSize={['1.5rem', '2rem']}>{ minifigure.price } ₽</Heading>
                        <Flex mt={'15px'} mb={{ base: '20px', lg: '40px'}}>
                            <Button h={['5vh']} onClick={ () => onAddMinifigure(minifigure) } colorScheme={'blue'} borderRadius={'10px'}>
                                Добавить в корзину
                            </Button>
                            <Center ml={'10px'}>
                                <Text textColor={'blackAlpha.800'}>
                                    { minifigure.quantity_in_stock > 0 ? 'Есть' : 'Нет' } в наличии
                                </Text>
                            </Center>
                        </Flex>
                        <Box mt={{ base: '20px', lg: '30px'}}>
                            <Text css={'white-space: pre-wrap'} mt={'15px'} fontSize={['0.9rem', '1rem']} textColor={'blackAlpha.800'}>{ minifigure.description }</Text>
                        </Box>
                    </Box>
                </Stack>
            </Box>
            <Footer />
        </Box>
    );
};

export const getStaticPaths = async () => {

    const minifiguresQuery = await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOSTNAME}/api/minifigures`);
    const minifigures = await minifiguresQuery.json();

    const paths = minifigures.map((minifigure) => ({
        params: {
            slug: minifigure.slug
        }
    }));
    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug } }) => {

    const minifigureQuery = await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOSTNAME}/api/minifigures/${slug}`);
    const minifigure = await minifigureQuery.json();

    return {
        props: { minifigure }
    }
}

export default MinifigureDetails;
