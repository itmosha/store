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
        <Card w={['40vw', '30vw', '20vw', '18vw']}
              boxShadow={{ base: '0px 1px 7px 2px rgba(0, 0, 0, 0.5)', lg: '0px 3px 10px 2px rgba(0, 0, 0, 0.45)'}}
              rounded={'1rem'}
        >
            <CardBody p={['2vw', '1.5vw', '1vw', '0.8vw']}>
                <Link href={`product/${product.slug}`}>
                    <Image
                        w={['36vw', '27vw', '18vw', '16.4vw']}
                        src={ product.images[0]?.image ? product.images[0].image : DefaultPresentImage.src }
                        alt={ product.title }
                    />
                </Link>
                <Stack mt={'5px'}>
                    <Heading fontSize={['0.9rem', '0.95rem', '1.05rem', '1.15rem', '1.25rem']}>{ product.title }</Heading>
                    <Text fontSize={['0.80rem', '0.85rem', '0.95rem', '1rem', '1.05rem']}>{ product.price } ₽</Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter p={['2vw 4vw', '2vw 3vw', '1.5vw 2.5vw', '1vw 1vw']} justify={'center'} display={'block'}>
                <ButtonGroup>
                    <Button variant={'solid'} colorScheme={'red'} w={['32vw', '24vw', '15vw', '16vw']} onClick={ () => onAdd(product, 1) }>
                        В корзину
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
};


export default Product;