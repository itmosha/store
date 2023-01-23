import React from 'react';
import Link from 'next/link';
import DefaultLegoSetImage from '../../public/DefaultLegoSetImage.png';
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

const LegoSetCard = ({ legoSet }) => {
    const { onAdd } = useStateContext();

    return (
        <Card w={['40vw', '30vw', '20vw', '18vw']}
              boxShadow={{ base: '0px 1px 5px 1px rgba(0, 0, 0, 0.5)', lg: '0px 3px 10px 2px rgba(0, 0, 0, 0.45)'}}
              rounded={['1rem']}
        >
            <CardBody p={['2vw', '1.5vw', '1vw', '1vw']}>
                <Link href={`/sets/${legoSet.slug}`}>
                    <Image
                        w={['36vw', '27vw', '18vw', '16.4vw']}
                        src={ legoSet.images[0]?.image ? legoSet.images[0].image : DefaultLegoSetImage.src }
                        alt={ legoSet.title }
                        rounded={['1rem']}
                    />
                </Link>
                <Stack mt={'5px'} align={'center'}>
                    <Text fontSize={['0.8rem', '0.9rem']} textColor={'blackAlpha.700'} mt={'0!important'} align={'start'}>{ legoSet.sku }</Text>
                    <Heading fontSize={['0.85rem', '0.90rem', '1.00rem', '1.10rem', '1.20rem']} mt={'0!important'} fontWeight={'500'}>{ legoSet.title }</Heading>
                    <Text fontSize={['0.90rem', '0.95rem', '1.05rem', '1.10rem', '1.15rem']} mt={['1rem!important']}>{ legoSet.price } ₽</Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter p={['2vw 4vw', '2vw 3vw', '1.5vw 2.5vw', '1vw 1vw']} justify={'center'} display={'block'}>
                <ButtonGroup>
                    <Button variant={'solid'} colorScheme={'blue'} w={['32vw', '24vw', '15vw', '16vw']} rounded={['0.5rem']} onClick={ () => onAdd(legoSet, 1) }>
                        В корзину
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
};

export default LegoSetCard;