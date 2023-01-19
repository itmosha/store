import React from 'react';
import SeriesCard from "./SeriesCard";

import SpeedChampionsImage from '../public/series/SpeedChampionsImage.png';

import {
    Box,
    Wrap
} from '@chakra-ui/react';


const SeriesList = () => {
    const series = [
        { title: 'Speed Champions', alt: 'sc', image: SpeedChampionsImage }
    ]

    return (
        <Box>
            <Wrap
                justify={'center'}
                spacing={'10px'}
                m={['5vw 2vw', '2vw 5vw']}
                p={['2vw', '1vw']}
            >
                { series.map((s) => (<SeriesCard s={s}/>)) }
            </Wrap>

        </Box>
    );
};

export default SeriesList;