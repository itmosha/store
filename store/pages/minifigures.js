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

            <Heading>This is all minifigures page</Heading>

            <Footer />
        </Box>
    );
};

export default MinifiguresPage;