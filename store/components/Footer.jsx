import React from 'react';
import { SlSocialVkontakte } from "react-icons/sl";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";
import { ButtonGroup, Center, Box, IconButton, Stack, Text } from "@chakra-ui/react";

const Footer = () => {
    return (
            <Box as={'footer'} py={'7'} px={'3'} mt={'10'} boxShadow={'0 7px 10px 9px rgba(0, 0, 0, 0.3)'}>
                <Stack spacing={'4'}>
                    <Stack justify={'space-between'} direction={'row'} align={'center'} pr={'5'}>
                        <Center ml={'3'}>
                            <Link href={'/'}>
                                <Text fontSize={'xl'} as={'b'}>Block Store</Text>
                            </Link>
                        </Center>
                        <ButtonGroup variant={'solid'}>
                            <Link href={'https://t.me/blockstore1'}>
                                <IconButton
                                    aria-label={'Telegram'}
                                    icon={<FaTelegramPlane fontSize={'1.25rem'} />}
                                    cursor={'pointer'}
                                />
                            </Link>
                            <Link href={'https://vk.com/public217881786'}>
                                <IconButton
                                    aria-label={'VK'}
                                    icon={<SlSocialVkontakte fontSize={'1.25rem'} />}
                                    cursor={'pointer'}
                                />
                            </Link>
                        </ButtonGroup>
                    </Stack>
                    <Box align={'center'}>
                        <Text fontSize={'sm'}>
                            &copy; { new Date().getFullYear() } Block Store. Все права защищены.
                        </Text>
                    </Box>
                </Stack>
            </Box>
    );
};

export default Footer;