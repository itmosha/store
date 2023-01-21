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
        <Box w={['40vw', '30vw', '20vw', '18vw']}
             boxShadow={{ base: '0px 1px 5px 1px rgba(0, 0, 0, 0.5)', lg: '0px 3px 10px 2px rgba(0, 0, 0, 0.45)'}}
             rounded={'1rem'}
        >
            <Link href={`/sets/series/${s.slug}`}>
                <Card rounded={'0.5rem'}>
                    <CardHeader p={'0.5rem'}>
                        <Image src={ s.image } rounded={'1rem'}/>
                    </CardHeader>
                    <CardBody pt={'0.5rem'}>
                        <Heading fontSize={'1rem'}>{ s.title }</Heading>
                    </CardBody>
                </Card>
            </Link>
        </Box>
    );
};

export default SeriesCard;