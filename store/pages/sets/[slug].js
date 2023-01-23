import React, { useState } from 'react';
import { useStateContext } from '../../context/StateContext';
import DefaultLegoSetImage from '../../public/DefaultLegoSetImage.png';
import PartsCountIcon from '../../public/PartsCountIcon.png';
import MinifiguresCountImage from '../../public/MinifiguresCountIcon.png';
import BoxDimensionsIcon from '../../public/BoxDimensionsIcon.png';
import Navbar from "../../components/Navbar";
import Link from 'next/link';
import Footer from "../../components/Footer";
import {
    Box,
    Stack,
    Image,
    Flex,
    VStack,
    Heading,
    Text,
    Button,
    Center,
    Divider
} from '@chakra-ui/react';

const LegoSetDetails = ({ legoSet }) => {
    const [ index, setIndex ] = useState(0);
    const { onAdd } = useStateContext();

    return (
        <Box minH={'90vh'}>
            <Navbar />

            <Box
                minH={'100vh'} w={'100vw'}
                display={['block']}
                p={{ base: '2vw', lg: '2vw 12vw'}}
            >
                <Box p={{ base: '10px 20px', lg: '0'}} >
                    <Heading fontSize={['1.5rem', '2rem']} fontWeight={['500']}>{ legoSet.title }</Heading>
                    <Link href={`/sets/series/${legoSet.series_slug}`}>
                        <Text fontSize={['0.8rem', '1rem']} pl={'3px'} textColor={'blackAlpha.800'}>{ legoSet.series }</Text>
                    </Link>
                    <Text fontSize={['0.8rem', '1rem']} textColor={['blackAlpha.800']} pl={['3px']}>{ legoSet.sku }</Text>
                </Box>
                <Stack direction={{ base: 'column', lg: 'row'}} mt={{ base: '10px', lg: '20px' }}>
                    <Stack direction={{ base: 'column', lg: 'row'}}>
                        <Box w={{ base: '96vw', lg: '5vw' }} m={{ base: '0!important', lg: '0 1vw 0 0!important'}}>
                            { legoSet.images?.length > 0 && (
                                <Box>
                                    <Stack direction={{ base: 'row', lg: 'column' }}>
                                        { legoSet.images.map((item, i) => (
                                            <Image
                                                cursor={'pointer'}
                                                src={ legoSet.images[i].image }
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
                        <Box w={{ base: '96vw', lg: '34vw'}}>
                            <Image
                                src={ legoSet.images[index]?.image ? legoSet.images[index].image : (legoSet.images[0]?.image ? legoSet.images[0].image : DefaultLegoSetImage.src ) }
                                w={{ base: '96vw', lg: '34vw'}}
                            />
                        </Box>
                    </Stack>
                    <Box
                        w={{ base: '96vw', lg: '35vw' }} ml={{ base: '0', lg: '1rem'}}
                        h={'fit-content'}
                        p={{ base: '5vw', lg: '1.5vw'}}
                        boxShadow={'0px 7px 10px 1px rgba(0, 0, 0, 0.5)'}
                        borderRadius={'15px'}
                    >
                        <Heading fontWeight={'500'} fontSize={['1.5rem', '2rem']}>{ legoSet.price } ₽</Heading>
                        <Flex mt={'15px'} mb={{ base: '20px', lg: '40px'}}>
                            <Button h={['5vh']} onClick={ () => onAdd(legoSet, 1) } colorScheme={'blue'} borderRadius={'10px'}>
                                Добавить в корзину
                            </Button>
                            <Center ml={'10px'}>
                                <Text textColor={'blackAlpha.800'}>
                                    { legoSet.quantity_in_stock > 0 ? 'Есть' : 'Нет' } в наличии
                                </Text>
                            </Center>
                        </Flex>
                        <Flex align={'center'} px={{ base: '2vw', lg: '1vw'}}>
                            <VStack w={'9vw'} h={'5vw'} mx={{ base: '9vw', lg: '1vw' }}>
                                <Image src={ PartsCountIcon.src } w={{ base: '20vw', lg: '3vw' }} h={{ base: '20vw', lg: '3vw' }} mt={['2px']}/>
                                <Text mt={'5px!important'} fontSize={['0.70rem', '1rem', '1.25rem', '0.9rem']} fontWeight={'700'}>{ legoSet.parts_amount }</Text>
                            </VStack>
                            <Divider orientation={'vertical'} h={{ base: '24vw', lg: '5vw' }} borderColor={'blackAlpha.700'}/>
                            <VStack w={'9vw'} h={'5vw'} mx={{ base: '9vw', lg: '1vw'}}>
                                <Image src={ MinifiguresCountImage.src } w={{ base: '20vw', lg: '3vw' }} h={{ base: '20vw', lg: '3vw' }} mt={['2px']} />
                                <Text mt={'5px!important'} fontSize={['0.70rem', '1rem', '1.25rem', '0.9rem']} fontWeight={'700'}>{ legoSet.minifigures_amount }</Text>
                            </VStack>
                            <Divider orientation={'vertical'} h={{ base: '24vw', lg: '5vw' }} borderColor={'blackAlpha.700'}/>
                            <VStack w={'9vw'} h={'5vw'} mx={{ base: '9vw', lg: '1vw'}}>
                                <Image src={ BoxDimensionsIcon.src } w={{ base: '20vw', lg: '3vw' }} h={{ base: '20vw', lg: '3vw' }} mt={['2px']} />
                                <Text mt={'5px!important'} fontSize={['0.70rem', '1rem', '1.25rem', '0.9rem']} fontWeight={['700']} whiteSpace={'nowrap'}>{ legoSet.dimensions }</Text>
                            </VStack>
                        </Flex>
                        <Box mt={{ base: '20px', lg: '30px'}}>
                            <Text css={'white-space: pre-wrap'} mt={'15px'} fontSize={['0.9rem', '1rem']} textColor={'blackAlpha.800'}>{ legoSet.description }</Text>
                        </Box>
                    </Box>
                </Stack>
            </Box>
            <Footer />
        </Box>
    );
};

export const getStaticPaths = async () => {

    const legoSetsQuery = await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOSTNAME}/api/lego_sets`);
    const legoSets = await legoSetsQuery.json();

    const paths = legoSets.map((legoSet) => ({
        params: {
            slug: legoSet.slug
        }
    }));
    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug } }) => {

    const legoSetQuery = await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOSTNAME}/api/lego_sets/${slug}`);
    const legoSet = await legoSetQuery.json();

    return {
        props: { legoSet }
    }
}

export default LegoSetDetails;