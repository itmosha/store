import React from 'react';
import {
    Box,
    Heading
} from '@chakra-ui/react';
import { Footer, Navbar } from "../../components";

const CategoriesPage = () => {

    return (
        <Box align={'center'}>
            <Navbar />

            <Heading>This is sets categories page</Heading>

            <Footer />
        </Box>
    );
};


export default CategoriesPage;