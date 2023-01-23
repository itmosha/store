import React from 'react';
import {Wrap, Box, Heading} from '@chakra-ui/react';
import MinifigureCard from './MinifigureCard';

const MinifigureList = ({ minifiguresList }) => {
    return (
        <Box>
            <Wrap
                justify={'center'}
                spacingX={['2vw', '2vw', '1vw', '1vw']}
                spacingY={['3vw', '3vw', '2vw', '1.5vw']}
                m={['5vw 2vw', '2vw 5vw']}
                p={['2vw', '1vw']}
            >
                { minifiguresList?.map((minifigure) => ( minifigure.quantity_in_stock > 0 ? <MinifigureCard minifigure={minifigure} key={minifigure.slug} /> : '' )) }
            </Wrap>
        </Box>
    );
};

export default MinifigureList;
