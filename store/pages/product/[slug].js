import React, { useState } from 'react';
import { useStateContext } from '../../context/StateContext';
import DefaultPresentImage from '../../public/default_present.png';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
    Box,
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

            <Box minH={'85vh'} p={'2rem 4rem'}>
                <Flex>
                    { images.length > 0 && (
                    <Box borderWidth={'2px'} borderColor={'red.200'} borderRadius={'1rem'} p={'0.5rem'}>
                        { images?.map((item, i) => (
                            <Img
                                src={ images[i].image }
                                onMouseEnter={ () => setIndex(i) }
                                w={'4rem'}
                                h={'4rem'}
                                borderRadius={'1rem'}
                                _hover={{ bgColor: 'red.200', padding: '2px' }}
                            />
                        ))}
                    </Box>
                    )}
                    <Box ml={'0.5rem'}>
                        <Img
                            src={ images[index]?.image ? images[index].image : (images[0]?.image ? images[0].image : DefaultPresentImage.src ) }
                            w={'20rem'}
                            h={'20rem'}
                            border={'2px'}
                            borderRadius={'1rem'}
                            borderColor={'red.200'}
                        />
                    </Box>
                    <Box maxW={'40rem'}>
                        <VStack ml={'1rem'} p={'1rem'} align={'start'} bgColor={'gray.200'} borderRadius={'1.5rem'}>
                            <Box>
                                <Heading fontSize={'1.75rem'}>{ title }</Heading>
                            </Box>
                            <Box>
                                <Heading fontSize={'1.5rem'} fontWeight={'400'}>
                                    { price } ₽
                                </Heading>
                            </Box>
                            <Box py={'0.5rem'}>
                                <Heading fontSize={'1rem'} mb={'1rem'}>Описание:</Heading>
                                <Text css={'white-space: pre-wrap'}>{ description }</Text>
                            </Box>
                            <Divider borderColor={'gray.500'}/>
                            <Box pt={'0.5rem'}>
                                <Flex>
                                    <Text fontSize={'0.9rem'} textColor={'red'} mr={'0.5rem'}>(Доступно {quantity_in_stock})</Text>
                                    <Heading fontSize={'1rem'}>Количество:</Heading>
                                </Flex>
                            </Box>
                            <Flex justify={'space-between'}>
                                <Box ml={'2rem'}>
                                   <Flex>
                                       <Button w={'2.5rem'} h={'2.5rem'} onClick={ decQty }>
                                           <Heading fontSize={'0.75rem'}>
                                               —
                                           </Heading>
                                       </Button>
                                       <Center w={'2.5rem'} h={'2.5rem'} borderRadius={'0.35rem'} borderWidth={'2px'} borderColor={'red.200'}>
                                           <Heading fontSize={'1rem'}>
                                               { qty }
                                           </Heading>
                                       </Center>
                                           { quantity_in_stock > qty ? (
                                               <Button w={'2.5rem'} h={'2.5rem'} onClick={ incQty }>
                                                   <Heading fontSize={'1.25rem'}>
                                                       +
                                                   </Heading>
                                               </Button>

                                           ) : (
                                               <Button w={'2.5rem'} h={'2.5rem'}>
                                                   <Heading fontSize={'1.25rem'}>
                                                       +
                                                   </Heading>
                                               </Button>
                                           )}
                                   </Flex>
                                </Box>
                                <Button ml={'5rem'} h={'2.5rem'} variant={'solid'} colorScheme={'red'} onClick={ () => onAdd(product, qty) }>
                                    Добавить в корзину
                                </Button>
                            </Flex>
                        </VStack>
                    </Box>
                </Flex>
            </Box>

            <footer>
                <Footer />
            </footer>
        </Box>
    );
};

export const getStaticPaths = async () => {

    // const productsQuery = await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOSTNAME}/api/items`);
    const productsQuery = await  fetch('http://127.0.0.1:8000/api/items');

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