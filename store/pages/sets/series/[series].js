import React from 'react';
import { Navbar, Footer } from "../../../components";
import LegoSetSeriesList from "../../../components/legoSetSeries/LegoSetSeriesList";
import {
    Box,
    Heading
} from "@chakra-ui/react";

const CertainSeriesPage = ({ legoSets, seriesData }) => {

    return (
        <Box align={'center'}>
            <Navbar />
            <Box minH={'80vh'}>
                <Box>
                    <Heading my={['5vw', '2vw']} fontSize={['1.5rem', '2rem']} fontWeight={'700'}>Все наборы серии { seriesData.title }</Heading>
                </Box>

                <LegoSetSeriesList legoSets={legoSets} seriesTitle={seriesData.title}/>

            </Box>
            <Footer />
        </Box>
    );
};

export const getStaticPaths = async () => {

    const allSeriesQuery = await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOSTNAME}/api/series`);
    const allSeries = await allSeriesQuery.json();

    console.log(allSeries);

    const paths = allSeries.map((s) => ({
        params: {
            series: s.slug
        }
    }));
    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { series } }) => {

    const legoSetsQuery = await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOSTNAME}/api/lego_sets`);
    const legoSets = await legoSetsQuery.json();

    const seriesListQuery = await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOSTNAME}/api/series`);
    const seriesList = await seriesListQuery.json();

    for (let i = 0; i < seriesList.length; i++) {
        console.log(`${seriesList[i].slug} ${series}`);
        if (seriesList[i].slug === series) {
            const seriesData = seriesList[i];
            return {
                props: { legoSets, seriesData }
            }
        }
    }
}

export default CertainSeriesPage;