import React from 'react';
import Link from 'next/link';
import { Box, Wrap, Flex, Image } from '@chakra-ui/react';
import { FooterBanner, Navbar, HeaderBanner, Footer } from "../components";
import SetsReferenceImage from '../public/SetsReference.png';
import PartsReferenceImage from '../public/PartsReference.png';
import MinifiguresReferenceImage from '../public/MinifiguresReference.png';
import SeriesReferenceImage from '../public/SeriesReference.png';

const Home = () => {
    return (
        <Box align={'center'}>
            <Navbar />
            <Box minH={'80vh'}>
                <HeaderBanner reference={'/'}/>

                <Box py={['10vw', '5vw', '0.5vw']}>
                    <Flex px={['10px']} w={['98w', '760px']} maxW={'100vw'} gap={['1vw']}>
                        <Box
                            boxShadow={['0px 1px 5px 1px rgba(0, 0, 0, 0.5)', '0px 3px 10px 2px rgba(0, 0, 0, 0.5)']} borderRadius={'1rem'} w={['32vw']}>
                            <Link href={'/sets/'}>
                                <Image
                                    src={ SetsReferenceImage.src }
                                    borderRadius={'1rem'}
                                />
                            </Link>
                        </Box>
                        <Box
                            boxShadow={['0px 1px 5px 1px rgba(0, 0, 0, 0.5)', '0px 3px 10px 2px rgba(0, 0, 0, 0.5)']} borderRadius={'1rem'} w={['32vw']}>
                            <Link href={'/parts'}>
                                <Image
                                    src={ PartsReferenceImage.src }
                                    borderRadius={'1rem'}
                                />
                            </Link>
                        </Box>
                        <Box
                            boxShadow={['0px 1px 5px 1px rgba(0, 0, 0, 0.5)', '0px 3px 10px 2px rgba(0, 0, 0, 0.5)']} borderRadius={'1rem'} w={['32vw']}>
                            <Link href={'/minifigures'}>
                                <Image
                                    src={ MinifiguresReferenceImage.src }
                                    borderRadius={'1rem'}
                                />
                            </Link>
                        </Box>
                    </Flex>
                    <Box my={['1vw']} mx={['1vw']} w={['98vw', '740px']} maxW={'100vw'}
                         boxShadow={['0px 1px 3px 1px rgba(0, 0, 0, 0.5)', '0px 3px 10px 2px rgba(0, 0, 0, 0.5)']} borderRadius={'1rem'}>
                        <Link href={'/sets/series'}>
                            <Image
                                src={ SeriesReferenceImage.src }
                                borderRadius={'1rem'}
                            />
                        </Link>
                    </Box>
                </Box>

                <FooterBanner reference={'/'}/>
            </Box>
            <Footer />
        </Box>
    );
};

export default Home;