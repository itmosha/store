import React from 'react';
import { Navbar, Footer } from "../../components";
import {
    Box,
    Heading
} from '@chakra-ui/react';
import SeriesList from "../../components/SeriesList";

const AllSeriesPage = () => {
    return (
        <Box align={'center'}>
            <Navbar />
            <Box minH={'80vh'}>
                <Box>
                    <Heading my={['5vw', '2vw']} fontSize={'2rem'} fontWeight={'700'}>Наборы LEGO по сериям</Heading>
                </Box>
                <SeriesList />
            </Box>
            <Footer />
        </Box>
    );
};

export default AllSeriesPage;