import React from 'react';
import { Navbar, Footer } from "../components";
import {
    Box,
    Heading
} from "@chakra-ui/react";
import ProductsList from "../components/ProductsList";

const SetsPage = ({ legoSets }) => {

    return (
        <Box align={'center'}>
            <Navbar />
            <Box minH={'80vh'}>
                <Box>
                    <Heading my={['5vw', '2vw']} fontSize={'2rem'} fontWeight={'700'}>Все наборы LEGO</Heading>
                </Box>

                <ProductsList products={legoSets} />
            </Box>
            <Footer />
        </Box>
    );
};

export const getServerSideProps = async () => {
    const legoSetsQuery = await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOSTNAME}/api/lego_sets`);
    const legoSets = await legoSetsQuery.json();

    return {
        props: { legoSets }
    }
}

export default SetsPage;