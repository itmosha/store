import React from 'react';
import '../styles/globals.css';
import theme from '../styles/theme';
import { Layout } from '../components'
import { StateContext, useStateContext } from '../context/StateContext';
import { Toaster } from "react-hot-toast";
import { ChakraProvider } from "@chakra-ui/react";

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
