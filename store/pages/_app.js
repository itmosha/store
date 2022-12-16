import React from 'react';
import { Layout } from '../components'
import '../styles/globals.css';
import '../styles/product.css';
import '../styles/header.css';
import '../styles/footer.css';
import '../styles/side-cart.css';
import '../styles/hero-banner.css';
import '../styles/footer-banner.css';
import { StateContext } from '../context/StateContext';
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
      <StateContext>
        <Layout>
            <Toaster />
            <Component {...pageProps} />
        </Layout>
      </StateContext>
  )
}

export default MyApp
