import React from 'react';
import { Wrap, Box } from '@chakra-ui/react';
import PartCard from './PartCard';

const PartList = ({ partsList }) => {
    return (
        <Box>
            <Wrap
                justify={'center'}
                spacingX={['2vw', '2vw', '1vw', '1vw']}
                spacingY={['3vw', '3vw', '2vw', '1.5vw']}
                m={['5vw 2vw', '2vw 5vw']}
                p={['2vw', '1vw']}
            >
                { partsList?.map((part) => ( part.quantity_in_stock > 0 ? <PartCard part={part} key={part.slug} /> : '' )) }
            </Wrap>
        </Box>
    );
};

export default PartList;