import React from 'react';
import { Navbar, Footer } from "../../../components";
import {
    Box,
    Heading
} from "@chakra-ui/react";

const CertainSeriesPage = ({ seriesName }) => {

    return (
        <Box align={'center'}>
            <Navbar />

            <Heading>This is a certain series page</Heading>

            <Footer />
        </Box>
    );
};

export default CertainSeriesPage;