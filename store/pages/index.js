import React from 'react';
import Link from 'next/link';
import { Box, Wrap, Flex, Image } from '@chakra-ui/react';
import { FooterBanner, Navbar, HeaderBanner, Footer } from "../components";
import SetsReferenceImage from '../public/SetsReference.png';
import PartsReferenceImage from '../public/PartsReference.png';
import MinifiguresReferenceImage from '../public/MinifiguresReference.png';

const Home = () => {
    return (
        <Box align={'center'}>
            <Navbar />
            <HeaderBanner reference={'/'}/>

            <Flex my={'20px'} w={'760px'} h={'320px'} gap={'20px'}>
                <Box
                    boxShadow={'0px 3px 10px 2px rgba(0, 0, 0, 0.5)'} borderRadius={'1rem'} w={'240px'} h={'320px'}>
                    <Link href={'/sets/'}>
                        <Image
                            src={ SetsReferenceImage.src }
                            borderRadius={'1rem'}
                        />
                    </Link>
                </Box>
                <Box
                    boxShadow={'0px 3px 10px 2px rgba(0, 0, 0, 0.5)'} borderRadius={'1rem'} w={'240px'} h={'320px'}>
                    <Link href={'/parts'}>
                        <Image
                            src={ PartsReferenceImage.src }
                            borderRadius={'1rem'}
                        />
                    </Link>
                </Box>
                <Box
                    boxShadow={'0px 3px 10px 2px rgba(0, 0, 0, 0.5)'} borderRadius={'1rem'} w={'240px'} h={'320px'}>
                    <Link href={'/minifigures'}>
                        <Image
                            src={ MinifiguresReferenceImage.src }
                            borderRadius={'1rem'}
                        />
                    </Link>
                </Box>
            </Flex>

            <FooterBanner reference={'/'}/>
            <Footer />
        </Box>
    );
};

export default Home;