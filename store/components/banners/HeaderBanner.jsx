import React from 'react';
import Link from 'next/link';
import { Box, Image } from '@chakra-ui/react';
import HeaderBannerImage from '../../public/HeaderBannerImage.webp';

const HeaderBanner = ({ reference }) => {
    return (
        <Box
            my={['1.5rem', '2rem', '3rem']}
            mx={['0vw', '1vw', '2vw']}
            boxShadow={'0px 3px 10px 2px rgba(0, 0, 0, 0.5)'}
            borderRadius={['1rem']}
        >
            <Link href={ reference }>
                <Image
                    w={['100vw', '98vw', '96vw']}
                    src={ HeaderBannerImage.src } borderRadius={['1rem']}
                />
            </Link>
        </Box>
    );
};

export default HeaderBanner;