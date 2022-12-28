import React from 'react';
import { Layout } from '../components'
import '../styles/globals.css';
import '../styles/product.css';
import '../styles/header.css';
import '../styles/footer.css';
import '../styles/side-cart.css';
import '../styles/hero-banner.css';
import '../styles/footer-banner.css';
import '../styles/product-page.css';
import { StateContext } from '../context/StateContext';
import { Toaster } from "react-hot-toast";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider>
          <StateContext>
              <Layout>
                  <Toaster />
                  <Component {...pageProps} />
              </Layout>
          </StateContext>
      </ChakraProvider>
  )
}

export default MyApp
