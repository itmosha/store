import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from './';
import { useStateContext } from "../context/StateContext";
import {
    Text,
    Box,
    ButtonGroup,
    Center,
    HStack,
    Flex,
    Button,
} from '@chakra-ui/react';

const Navbar = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext();

    return (
        <Box p={'2'} boxShadow={'1px 2px 10px 2px rgba(0, 0, 0, 0.3)'}>
            <HStack>
                <Flex justify={'space-between'} flex={'1'}>
                    <Center ml={'3'}>
                        <Link href={'/'}>
                            <Text fontSize={'xl'} as={'b'}>Block Store</Text>
                        </Link>
                    </Center>
                    <ButtonGroup>
                        <Link href={'/common'}>
                            <Button variant={'ghost'}>Помощь</Button>
                        </Link>
                        <Button variant={'ghost'} onClick={ () => setShowCart(true) }>
                            <AiOutlineShopping size={'26'}/>
                            <Text fontSize={'0.75rem'}
                                  bgColor={'red.200'}
                                  p={'0.1rem 0.3rem'}
                                  borderRadius={'full'}
                                  position={'absolute'}
                                  left={'2rem'}
                                  top={'0.25rem'}
                            >
                                { totalQuantities }
                            </Text>
                        </Button>
                    </ButtonGroup>
                </Flex>
            </HStack>
            { showCart && <Cart /> }
        </Box>
    );
};

export default Navbar;