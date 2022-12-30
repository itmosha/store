import React from 'react'
import { Product, FooterBanner, HeroBanner } from "../components";
import { Wrap, WrapItem } from '@chakra-ui/react';

const Home = ({ products }) => {
  return (
    <>
      <HeroBanner />

        <Wrap justify={'center'} spacingX={'24px'} spacingY={'44px'} pt={'5rem'} pb={'3.2rem'}>
        {products?.map(
            (product) => ( product.quantity_in_stock > 0 ? <Product key={product.slug} product={product}/> : ''))}
        </Wrap>

      <FooterBanner />
    </>
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