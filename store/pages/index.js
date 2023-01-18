import React from 'react';
import { Box, Wrap } from '@chakra-ui/react';
import { FooterBanner, Navbar, HeaderBanner, Footer } from "../components";
import Product from "../components/Product";
import ProductsList from "../components/ProductsList";

const Home = ({ products }) => {
    return (
        <Box align={'center'}>
            <Navbar />
            <HeaderBanner reference={'/'}/>

            <ProductsList products={products} />

            <FooterBanner reference={'/'}/>
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
export default Home;