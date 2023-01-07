import React, { useState } from 'react';
import { useStateContext } from '../../context/StateContext';
import DefaultPresentImage from '../../public/default_present.png';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
    Box,
    Stack,
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
    const { images, title, price, description, quantity_in_stock } = product;
    const [ index, setIndex ] = useState(0);
    const { decQty, incQty, qty, onAdd } = useStateContext();

    return (
        <Box minH={'100vh'}>
            <Navbar />

            <Box minH={'85vh'} w={'100vw'} maxW={'100vw'} p={['3vw', '2.5vw', '2vw', '2rem 4rem']} display={['block', 'flex']}>
                <Stack direction={['column', 'row']}>
                    <Stack direction={['row']}>
                        { images.length > 0 && (
                        <Box borderWidth={'2px'} borderColor={'red.200'} borderRadius={['10px', '1rem']} p={['5px', '0.5rem']} h={'fit-content'} w={['', '5rem']}>
                            { images?.map((item, i) => (
                                <Img
                                    src={ images[i].image }
                                    onMouseEnter={ () => setIndex(i) }
                                    w={['12vw', '10vw', '6vw', '4rem']}
                                    h={['12vw', '10vw', '6vw', '4rem']}
                                    borderRadius={['10px', '1rem']  }
                                    _hover={{ bgColor: 'red.200', padding: '2px' }}
                                />
                            ))}
                        </Box>
                        )}
                        <Box ml={['3vw', '2.5vw', '2vw', '0.5rem']}>
                            <Img
                                src={ images[index]?.image ? images[index].image : (images[0]?.image ? images[0].image : DefaultPresentImage.src ) }
                                w={['76vw', '70vw', '30vw', '20rem']}
                                h={['76vw', '70vw', '30vw', '20rem']}
                                border={'2px'}
                                borderRadius={['10px', '1rem']}
                                borderColor={'red.200'}
                            />
                        </Box>
                    </Stack>
                    <Box maxW={['96vw', '40rem']}>
                        <VStack ml={['0', '0.25rem', '0.5rem', '1rem']} mt={['10px', '0']} p={['3vw 4vw', '1rem']} align={'start'} bgColor={'gray.200'} borderRadius={['10px', '1rem']}>
                            <Box>
                                <Heading fontSize={['1.25rem', '1.75rem']}>{ title }</Heading>
                            </Box>
                            <Box>
                                <Heading fontSize={['1rem', '1.25rem']} fontWeight={['500', '400']}>
                                    { price } ₽
                                </Heading>
                            </Box>
                            <Box py={'0.5rem'}>
                                <Heading fontSize={'1rem'} mb={['10px', '1rem']}>Описание:</Heading>
                                <Text css={'white-space: pre-wrap'} fontSize={['0.85rem', '1rem']}>{ description }</Text>
                            </Box>
                            <Divider borderColor={'gray.500'}/>
                            <Box pt={'0.5rem'}>
                                <Flex>
                                    <Text fontSize={'0.9rem'} textColor={'red'} mr={'0.5rem'}>(Доступно {quantity_in_stock})</Text>
                                    <Heading fontSize={'1rem'}>Количество:</Heading>
                                </Flex>
                            </Box>
                            <Stack justify={'space-between'} direction={['column', 'row']}>
                                <Box ml={['0', '2rem']} mx={['29vw', '0']}>
                                   <Flex>
                                       <Button w={['10vw', '2.5rem']} h={['10vw', '2.5rem']} onClick={ decQty }>
                                           <Heading fontSize={'0.75rem'}>
                                               —
                                           </Heading>
                                       </Button>
                                       <Center w={['10vw', '2.5rem']} h={['10vw', '2.5rem']} borderRadius={'0.35rem'} borderWidth={'2px'} borderColor={'red.200'}>
                                           <Heading fontSize={'1rem'}>
                                               { qty }
                                           </Heading>
                                       </Center>
                                           { quantity_in_stock > qty ? (
                                               <Button w={['10vw', '2.5rem']} h={['10vw', '2.5rem']} onClick={ incQty }>
                                                   <Heading fontSize={'1.25rem'}>
                                                       +
                                                   </Heading>
                                               </Button>

                                           ) : (
                                               <Button w={['10vw', '2.5rem']} h={['10vw', '2.5rem']}>
                                                   <Heading fontSize={'1.25rem'}>
                                                       +
                                                   </Heading>
                                               </Button>
                                           )}
                                   </Flex>
                                </Box>
                                <Box pl={['0', '3rem']}>
                                    <Button mx={['18vw', '0']} w={['52vw', '14rem']} h={['10vw', '2.5rem']} variant={'solid'} colorScheme={'red'} onClick={ () => onAdd(product, qty) }>
                                        Добавить в корзину
                                    </Button>
                                </Box>
                            </Stack>
                        </VStack>
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

    const productsQuery = await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOSTNAME}/api/items`);
    // const productsQuery = await  fetch('http://127.0.0.1:8000/api/items');

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