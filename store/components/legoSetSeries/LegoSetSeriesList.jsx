import React from 'react';
import { Wrap, Box } from "@chakra-ui/react";
import LegoSetCard from "../legoSets/LegoSetCard";

const LegoSetSeriesList = ({ legoSets, seriesTitle }) => {
    return (
        <Box>
            <Wrap
                justify={'center'}
                spacingX={['2vw', '2vw', '1vw', '1vw']}
                spacingY={['3vw', '3vw', '2vw', '1.5vw']}
                m={['5vw 2vw', '2vw 5vw']}
                p={['2vw', '1vw']}
            >
                { legoSets?.map((legoSet) => ( legoSet.quantity_in_stock > 0 && legoSet.series === seriesTitle ? <LegoSetCard legoSet={legoSet} key={legoSet.slug} /> : '')) }
            </Wrap>
        </Box>
    );
};

export default LegoSetSeriesList;
