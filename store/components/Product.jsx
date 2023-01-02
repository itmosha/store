import React from 'react';
import Link from 'next/link';
import DefaultPresentImage from '../public/default_present.png';
import { useStateContext } from "../context/StateContext";
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

const Product = ({ product }) => {
    const { onAdd } = useStateContext();

    return (
        <Card maxW={'270px'} boxShadow={'dark-lg'} rounded={'xl'}>
            <CardBody p={'15px'} pb={'5px'}>
                <Link href={`product/${product.slug}`}>
                    <Image
                        maxW={'240px'}
                        src={ product.images[0]?.image ? product.images[0].image : DefaultPresentImage.src }
                        alt={ product.title }
                    />
                </Link>
                <Stack mt={'1'}>
                    <Heading size={'md'}>{ product.title }</Heading>
                    <Text fontSize={'lg'}>{ product.price } ₽</Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter p={'3'} justify={'center'}>
                <ButtonGroup>
                    <Button variant={'solid'} colorScheme={'red'} size={'md'}
                            onClick={ () => onAdd(product, 1) }
                    >
                        В корзину
                    </Button>
                    <Link href={`/product/${product.slug}`}>
                        <Button variant={'outline'} colorScheme={'red'} size={'md'}>
                            Посмотреть
                        </Button>
                    </Link>
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
};


export default Product;