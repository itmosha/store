import React from 'react';
import Link from 'next/link';
import DefaultMinifigureImage from '../../public/DefaultLegoSetImage.png';
import { useStateContext } from "../../context/StateContext";
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

const MinifigureCard = ({ minifigure }) => {
    const { onAddMinifigure } = useStateContext();

    return (
        <Card w={['32vw', '20vw', '15vw', '13vw']}
              boxShadow={{ base: '0px 1px 5px 1px rgba(0, 0, 0, 0.5)', lg: '0px 3px 10px 2px rgba(0, 0, 0, 0.45)'}}
              rounded={['1rem']}
        >
            <CardBody p={['2vw', '1.5vw', '1vw', '1vw']}>
                <Link href={`/minifigures/${minifigure.slug}`}>
                    <Image
                        w={['28vw', '17vw', '13vw', '11.4vw']}
                        src={ minifigure.images[0]?.image ? minifigure.images[0].image : DefaultMinifigureImage.src }
                        alt={ minifigure.title }
                        rounded={['1rem']}
                    />
                </Link>
                <Stack mt={'5px'} align={'center'}>
                    <Text fontSize={['0.8rem', '0.9rem']} textColor={'blackAlpha.700'} mt={'0!important'} align={'start'}>{ minifigure.sku }</Text>
                    <Heading fontSize={['0.85rem', '0.90rem', '1.00rem', '1.10rem', '1.20rem']} mt={'0!important'} fontWeight={'500'}>{ minifigure.title }</Heading>
                    <Text fontSize={['0.90rem', '0.95rem', '1.05rem', '1.10rem', '1.15rem']} mt={['0.5rem!important']}>{ minifigure.price } ₽</Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter p={['2vw 2vw', '2vw 2vw', '1.5vw 1.5vw', '1vw 1vw']} justify={'center'} display={'block'}>
                <ButtonGroup>
                    <Button variant={'solid'} colorScheme={'blue'} w={['28vw', '16vw', '12vw', '11vw']} py={'7px'} h={'fit-content'} rounded={['0.5rem']} onClick={ () => onAddMinifigure(minifigure) }>
                        <Heading fontSize={['0.8rem', '0.9rem', '0.85rem']}>
                            В корзину
                        </Heading>
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
};

export default MinifigureCard;
