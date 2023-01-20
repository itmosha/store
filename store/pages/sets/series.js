import React from 'react';
import { Navbar, Footer } from "../../components";
import {
    Box,
    Heading
} from '@chakra-ui/react';
import SeriesList from "../../components/SeriesList";

const AllSeriesPage = ({ series }) => {
    return (
        <Box align={'center'}>
            <Navbar />
            <Box minH={'80vh'}>
                <Box>
                    <Heading my={['5vw', '2vw']} fontSize={'2rem'} fontWeight={'700'}>Наборы LEGO по сериям</Heading>
                </Box>
                <SeriesList series={series}/>
            </Box>
            <Footer />
        </Box>
    );
};

export const getServerSideProps = async () => {
    const resQuery = await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOSTNAME}/api/series`);

    const series = await resQuery.json();

    return {
        props: { series }
    }
}
export default AllSeriesPage;