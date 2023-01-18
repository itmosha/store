import React from 'react';
import { Navbar, Footer } from "../../../components";
import {
    Box,
    Heading
} from "@chakra-ui/react";

const SeriesPage = () => {

    return (
        <Box align={'center'}>
            <Navbar />

            <Heading>This is all sets series page</Heading>

            <Footer />
        </Box>
    );
};

export default SeriesPage;