import React from 'react';
import { Product, FooterBanner, HeaderBanner } from "../components";
import { Wrap, Box } from '@chakra-ui/react';

const Home = ({ products }) => {
  return (
    <Box align={'center'}>
        <HeaderBanner />

        <Wrap justify={'center'} spacingX={'24px'} spacingY={'44px'} p={'4rem 2rem 3rem 2rem'}>
        {products?.map(
            (product) => ( product.quantity_in_stock > 0 ? <Product key={product.slug} product={product}/> : ''))}
        </Wrap>

      <FooterBanner />
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