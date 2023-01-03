import React from 'react';
import { Layout } from '../components'
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';
import { Toaster } from "react-hot-toast";
import { ChakraProvider } from "@chakra-ui/react";
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider theme={theme}>
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
