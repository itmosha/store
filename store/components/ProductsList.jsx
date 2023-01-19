import React from 'react';
import { Wrap, Box } from "@chakra-ui/react";
import Product from "./Product";

const ProductsList = ({ products }) => {
    return (
        <Box>
            <Wrap
                justify={'center'}
                spacingX={['2vw', '2vw', '1vw', '1vw']}
                spacingY={['3vw', '3vw', '2vw', '1.5vw']}
                m={['5vw 2vw', '2vw 5vw']}
                p={['2vw', '1vw']}
            >
                { products?.map((product) => ( product.quantity_in_stock > 0 ? <Product product={product} key={product.slug} /> : '')) }
            </Wrap>
        </Box>
    );
};

export default ProductsList;