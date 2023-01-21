import React from 'react';
import { Navbar, Footer } from "../components";
import {
    Box,
    Heading
} from "@chakra-ui/react";

const MinifiguresPage = () => {

    return (
        <Box align={'center'}>
            <Navbar />

            <Box>
                <Heading my={['5vw', '2vw']} fontSize={'2rem'} fontWeight={'700'}>Все минифигурки LEGO</Heading>
            </Box>

            <Footer />
        </Box>
    );
};

export default MinifiguresPage;