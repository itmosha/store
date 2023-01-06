import React from 'react';
import { Wrap, Box } from '@chakra-ui/react';
import { Product, FooterBanner, Navbar, HeaderBanner, Footer } from "../components";

const Home = ({ products }) => {
  return (
    <Box align={'center'}>
        <Navbar />
        <HeaderBanner />

        <Wrap
            justify={'center'}
            spacingX={['10px', '16px', '24px']}
            spacingY={['16px', '24px', '44px']}
            p={['2rem 0rem 1.5rem 0rem', '3rem 1.5rem 2rem 1.5rem', '4rem 2rem 3rem 2rem']}
            mx={['0', '1rem', '2rem']}
        >
        {products?.map(
            (product) => ( product.quantity_in_stock > 0 ? <Product key={ product.slug } product={ product }/> : ''))}
        </Wrap>

      <FooterBanner />
        <footer>
            <Footer />
        </footer>
    </Box>
  )
}

export const getServerSideProps = async () => {

    // const resQuery = await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOSTNAME}/api/items`);
    const resQuery = await fetch('http://127.0.0.1:8000/api/items');

    const products = await resQuery.json();

    return {
        props: { products }
    }
}
export default Home