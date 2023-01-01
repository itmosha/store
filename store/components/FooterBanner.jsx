import React from 'react';
import Link from 'next/link';
import { Box, Image } from "@chakra-ui/react";
import FooterBannerImage from "../public/FooterBannerImage.webp";

const FooterBanner = () => {
    return (
        <Box
            mt={'3rem'}
            boxShadow={'0px 3px 10px 2px rgba(0, 0, 0, 0.5)'}
            borderRadius={'2rem'}
            mx={'5rem'}
        >
            <Link href={'/'}>
                <Image
                    border={'0.5px solid grey'}
                    src={ FooterBannerImage.src } borderRadius={'1rem'}
                />
            </Link>
        </Box>
    );
};

export default FooterBanner;