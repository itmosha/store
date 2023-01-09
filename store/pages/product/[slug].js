import React, { useState } from 'react';
import { useStateContext } from '../../context/StateContext';
import DefaultPresentImage from '../../public/default_present.png';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
    Box,
    Stack,
    Image,
    Flex,
    Img,
    VStack,
    Heading,
    Text,
    Button,
    Center,
    Divider
} from '@chakra-ui/react';

const ProductDetails = ({ product }) => {
    const { slug, images, title, price, description, quantity_in_stock } = product;
    const [ index, setIndex ] = useState(0);
    const { onAdd } = useStateContext();

    return (
        <Box minH={'90vh'}>
            <Navbar />

            <Box
                minH={'100vh'} w={'100vw'}
                display={['block']}
                p={{ base: '2vw', lg: '2vw 12vw'}}
            >
                <Box p={{ base: '10px 20px', lg: '0'}} >
                    <Heading fontSize={['1.5rem', '2rem']} fontWeight={['500']}>{ title }</Heading>
                    <Text fontSize={['0.8rem', '1.25rem']} fontWeight={['200']}
                          textColor={['blackAlpha.700']} pl={['3px']}>{ slug }</Text>
                </Box>
                <Stack direction={{ base: 'column', lg: 'row'}} mt={{ base: '10px', lg: '20px' }}ц>
                    <Stack direction={{ base: 'column', lg: 'row'}}>
                        <Box w={{ base: '96vw', lg: '5vw' }} m={['0!important']}>
                            { images?.length > 0 && (
                                <Box>
                                    <Stack direction={{ base: 'row', lg: 'column' }}>
                                        { images.map((item, i) => (
                                            <Image
                                                cursor={'pointer'}
                                                src={ images[i].image }
                                                w={{ base: '15vw', lg: '5vw'}}
                                                h={{ base: '15vw', lg: '5vw'}}
                                                ml={{ base: '0.85vw!important'}}
                                                onMouseDown={ () => setIndex(i) }
                                                border={'2px'}
                                                borderColor={ i === index ? 'blackAlpha.800!important' : 'blackAlpha.500'}
                                                borderRadius={'15px'}
                                                p={'5px'}
                                                _hover={{ borderColor: 'blackAlpha.600' }}
                                            />
                                        ))}
                                    </Stack>
                                </Box>
                            )}
                        </Box>
                        <Box w={{ base: '96vw', lg: '34vw'}} mx={{ base: '0', lg: '1vw'}}>
                            <Image
                                src={ images[index]?.image ? images[index].image : (images[0]?.image ? images[0].image : DefaultPresentImage) }
                                w={{ base: '96vw', lg: '34vw'}}
                            />
                        </Box>
                    </Stack>
                    <Box
                        w={{ base: '96vw', lg:'35vw' }} ml={{ base: '0', lg: '1rem'}}
                        h={'fit-content'}
                        p={{ base: '5vw', lg: '1.5vw'}}
                        boxShadow={'0px 7px 10px 1px rgba(0, 0, 0, 0.5)'}
                        borderRadius={'15px'}
                    >
                        <Heading fontWeight={'500'} fontSize={['1.5rem', '2rem']}>{ price } ₽</Heading>
                        <Flex mt={'15px'} mb={'40px'}>
                            <Button h={['5vh']} onClick={ () => onAdd(product, 1) } colorScheme={'red'} borderRadius={'10px'}>
                                Добавить в корзину
                            </Button>
                            <Center ml={'10px'}>
                                <Text textColor={'blackAlpha.800'}>
                                    { quantity_in_stock > 0 ? 'Есть' : 'Нет' } в наличии
                                </Text>
                            </Center>
                        </Flex>
                        <Text css={'white-space: pre-wrap'} mt={'15px'} fontSize={['0.9rem', '1rem']} textColor={'blackAlpha.800'}>{ description }</Text>
                    </Box>
                </Stack>
            </Box>
            <footer>
                <Footer />
            </footer>
        </Box>
    );
};

export const getStaticPaths = async () => {

    // const productsQuery = await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOSTNAME}/api/items`);
    const productsQuery = await fetch('http://127.0.0.1:8000/api/items');

    const products = await productsQuery.json();

    const paths = products.map((product) => ({
        params: {
            slug: product.slug
        }
    }));
    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug } }) => {

    // const productQuery = await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOSTNAME}/api/items/${slug}`);
    const productQuery = await fetch(`http://127.0.0.1:8000/api/items/${slug}`);
    const product = await productQuery.json();

    return {
        props: { product }
    }
}

export default ProductDetails