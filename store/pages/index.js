import React from 'react'
import { Product, FooterBanner, HeroBanner } from "../components";

const Home = ({ products }) => {
  return (
    <>
      <HeroBanner />

      <div className='products-container'>
        {products?.map(
          (product) => <Product key={product.slug} product={product}/>)}
      </div>

      <FooterBanner />
    </>
  )
}

export const getServerSideProps = async () => {

    const resQuery = await fetch(`https://${process.env.NEXT_PUBLIC_HOSTNAME}/api/items`);
    const products = await resQuery.json();

    return {
        props: { products }
    }
}
export default Home