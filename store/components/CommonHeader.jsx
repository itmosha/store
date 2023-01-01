import React from 'react';
import Link from 'next/link';
import {
    Box,
    Center,
    HStack,
    Text,
    Flex
} from '@chakra-ui/react';

const CommonHeader = () => {
    return (
        <Box p={'2.5'} borderBottom={'2px'} borderBottomColor={'gray.200'}>
            <HStack>
                <Flex justify={'space-between'} flex={'1'}>
                    <Center ml={'3'}>
                        <Link href={'/'}>
                            <Text fontSize={'xl'} as={'b'}>
                                Block Store
                            </Text>
                        </Link>
                    </Center>
                </Flex>
            </HStack>
        </Box>
    );
};

export default CommonHeader;