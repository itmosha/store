import React from 'react';
import { Navbar, Footer } from "../components";
import {
    Box,
    Heading
} from "@chakra-ui/react";
import ProductsList from "../components/ProductsList";

const SetsPage = ({ products }) => {

    return (
        <Box align={'center'}>
            <Navbar />

            <Heading>This is all sets page</Heading>

            <ProductsList products={products} />

            <Footer />
        </Box>
    );
};

export const getServerSideProps = async () => {
    const resQuery = await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOSTNAME}/api/items`);

    const products = await resQuery.json();

    return {
        props: { products }
    }
}

export default SetsPage;