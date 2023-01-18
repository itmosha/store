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

            <Heading>This is all parts page</Heading>

            <Footer />
        </Box>
    );
};

export default PartsPage;
