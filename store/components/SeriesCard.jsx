import React from 'react';
import Link from 'next/link';
import {
    Box,
    Image,
    Heading,
    Card,
    CardHeader,
    CardBody
} from '@chakra-ui/react';

const SeriesCard = ({ s }) => {
    return (
        <Box w={'240px'}>
            <Link href={`/sets/series/${s.title}`}>
                <Card rounded={'0.5rem'}>
                    <CardHeader>
                        <Image src={ s.image } rounded={'0.5rem'}/>
                    </CardHeader>
                    <CardBody>
                        <Heading fontSize={'1.25rem'}>{ s.title }</Heading>
                    </CardBody>
                </Card>
            </Link>
        </Box>
    );
};

export default SeriesCard;