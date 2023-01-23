import React from 'react';
import { Navbar, Footer } from "../components";
import {
    Box,
    Heading
} from "@chakra-ui/react";
import MinifigureList from "../components/minifigures/MinifigureList";

const MinifiguresPage = ({ minifigures }) => {

    return (
        <Box align={'center'}>
            <Navbar />
            <Box minH={'80vh'}>
                <Box>
                    <Heading my={['5vw', '2vw']} fontSize={['1.5rem', '2rem']} fontWeight={'700'}>Все минифигурки LEGO</Heading>
                </Box>

                <MinifigureList minifiguresList={minifigures} />
            </Box>
            <Footer />
        </Box>
    );
};

export const getServerSideProps = async () => {
    const minifiguresQuery = await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOSTNAME}/api/minifigures`);
    const minifigures = await minifiguresQuery.json();

    return {
        props: { minifigures }
    }
}

export default MinifiguresPage;