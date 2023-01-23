import React from 'react';
import { Navbar, Footer } from "../components";
import {
    Box,
    Heading
} from "@chakra-ui/react";
import PartList from "../components/parts/PartList";

const PartsPage = ({ parts }) => {

    return (
        <Box align={'center'}>
            <Navbar />
            <Box minH={'80vh'}>
                <Box>
                    <Heading my={['5vw', '2vw']} fontSize={'2rem'} fontWeight={'700'}>Все детали LEGO</Heading>
                </Box>

                <PartList partsList={parts} />
            </Box>
            <Footer />
        </Box>
    );
};

export const getServerSideProps = async () => {
    const partsQuery = await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOSTNAME}/api/parts`);
    const parts = await partsQuery.json();

    return {
        props: { parts }
    }
}

export default PartsPage;
