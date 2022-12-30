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
        <Box boxShadow={'md'} p={'2'}>
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
                            <AiOutlineShopping size={'28'}/>
                            <span className={'cart-item-qty'}>
                                { totalQuantities }
                            </span>
                        </Button>
                    </ButtonGroup>
                </Flex>
            </HStack>
            { showCart && <Cart /> }
        </Box>
    );
};

export default Navbar;