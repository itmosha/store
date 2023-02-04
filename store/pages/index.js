import React from 'react';
import { Box } from '@chakra-ui/react';
import { FooterBanner, Navbar, HeaderBanner, Footer } from "../components";
import IndexBanners from "../components/IndexBanners";

const Home = () => {
    return (
        <Box align={'center'}>
            <Navbar />
            <Box minH={'80vh'}>
                <HeaderBanner reference={'/'}/>

                <IndexBanners />

                {/*<FooterBanner reference={'/'}/>*/}
            </Box>
            <Footer />
        </Box>
    );
};

export default Home;