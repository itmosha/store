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
    //const resQuery = await fetch(`http://${process.env.BACKEND_IP}:${process.env.BACKEND_PORT}/api/items`);
    const resQuery = await fetch(`http://127.0.0.1:8000/api/items`);
    const products = await resQuery.json();

    return {
        props: { products }
    }
}
export default Home