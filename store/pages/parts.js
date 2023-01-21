import React from 'react';
import { Navbar, Footer } from "../components";
import {
    Box,
    Heading
} from "@chakra-ui/react";

const PartsPage = () => {

    return (
        <Box align={'center'}>
            <Navbar />
            <Box minH={'80vh'}>
                <Box>
                    <Heading my={['5vw', '2vw']} fontSize={'2rem'} fontWeight={'700'}>Все детали LEGO</Heading>
                </Box>
            </Box>
            <Footer />
        </Box>
    );
};

export default PartsPage;
