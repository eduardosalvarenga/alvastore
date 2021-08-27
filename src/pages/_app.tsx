import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/themes";
import { CartContext, CartProvider } from "../providers/CartContext";
import { ProductsProvider } from "../providers/ProductsContext";
import commerce from '../lib/commerce';
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider theme={theme}>
      <ProductsProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </ProductsProvider>
    </ChakraProvider>
  );
}

export default MyApp;
