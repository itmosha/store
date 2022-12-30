import React from 'react';
import Link from 'next/link';
import DefaultPresentImage from '../public/default_present.png';
import {
    Card,
    CardBody,
    CardFooter,
    Image,
    Stack,
    Heading,
    Text,
    Divider,
    Button,
    ButtonGroup
} from '@chakra-ui/react';

const Product = ({ product: { images, title, slug, price } }) => {
    return (
        <Card maxW={'270px'} boxShadow={'dark-lg'} rounded={'xl'}>
            <CardBody p={'15px'} pb={'5px'}>
                <Link href={`product/${slug}`}>
                    <Image
                        maxW={'240px'}
                        src={ images[0]?.image ? images[0].image : DefaultPresentImage.src }
                        alt={ title }
                    />
                </Link>
                <Stack mt={'1'}>
                    <Heading size={'md'}>{ title }</Heading>
                    <Text fontSize={'lg'}>{ price } ₽</Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter p={'3'} justify={'center'}>
                <ButtonGroup>
                    <Button variant={'solid'} colorScheme={'red'} size={'md'}>
                        В корзину
                    </Button>
                    <Button variant={'outline'} colorScheme={'red'} size={'md'}>
                        Посмотреть
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
};


export default Product;