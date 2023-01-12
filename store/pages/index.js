import React from 'react';
import { Box, Wrap } from '@chakra-ui/react';
import { FooterBanner, Navbar, HeaderBanner, Footer } from "../components";
import Product from "../components/Product";
import { useState } from 'react';

const Home = ({ products }) => {
    const [ currentPage, setCurrentPage ] = useState(1);
    const pageSize = 5;

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <Box align={'center'}>
            <Navbar />
            <HeaderBanner reference={'/'}/>

            <Wrap
                justify={'center'}
                spacingX={['2vw', '2vw', '1vw', '1vw']}
                spacingY={['3vw', '3vw', '2vw', '1.5vw']}
                m={['5vw 2vw', '3vw 5vw']}
                p={['2vw', '1vw']}
            >
                { products?.map((product) => ( product.quantity_in_stock > 0 ? <Product product={product} key={product.slug} /> : '')) }

            </Wrap>

            <FooterBanner reference={'/'}/>
            <footer>
                <Footer />
            </footer>
        </Box>
    );
};

export const getServerSideProps = async () => {
    // const resQuery = await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOSTNAME}/api/items`);
    const resQuery = await fetch('http://127.0.0.1:8000/api/items');

    const products = await resQuery.json();

    return {
        props: { products }
    }
}
export default Home;