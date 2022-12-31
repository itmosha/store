import React from 'react';
import { SlSocialVkontakte } from "react-icons/sl";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";
import { ButtonGroup, Center, Box, IconButton, Stack, Text } from "@chakra-ui/react";

const Footer = () => {
    return (
        <div className="footer-box-shadow">
            <Box as={'footer'} py={'7'} px={'3'} mt={'10'}>
                <Stack spacing={'4'}>
                    <Stack justify={'space-between'} direction={'row'} align={'center'} pr={'5'}>
                        <Center ml={'3'}>
                            <Link href={'/'}>
                                <Text fontSize={'xl'} as={'b'}>Block Store</Text>
                            </Link>
                        </Center>
                        <ButtonGroup variant={'solid'}>
                            <IconButton as={'a'} aria-label={'Telegram'} icon={<FaTelegramPlane fontSize={'1.25rem'} />} />
                            <IconButton as={'a'} aria-label={'VK'} icon={<SlSocialVkontakte fontSize={'1.25rem'} />} />
                        </ButtonGroup>
                    </Stack>
                    <Box align={'center'}>
                        <Text fontSize={'sm'}>
                            &copy; { new Date().getFullYear() } Block Store. Все права защищены.
                        </Text>
                    </Box>
                </Stack>
            </Box>
        </div>
    );
};

export default Footer;