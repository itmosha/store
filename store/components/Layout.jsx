import React, { useEffect } from 'react';
import Head from 'next/head';
import { getCookie } from "cookies-next";
import { useStateContext } from "../context/StateContext";
import {Box} from "@chakra-ui/react";

const Layout = ({ children }) => {
    const { setCartItems, setTotalQuantities, setTotalPrice } = useStateContext();

    const cookiesCartItems = getCookie('cookieCartItems');
    const cookiesTotalQuantities = getCookie('totalCartQuantities');
    const cookiesTotalPrice = getCookie('totalCartPrice')

    useEffect(() => {
        GetCookies();
    }, []);

    const GetCookies = () => {
        if (cookiesCartItems) {
            const cartItems = JSON.parse(cookiesCartItems);
            setCartItems(cartItems);

            if (cookiesTotalQuantities) { setTotalQuantities(Number(cookiesTotalQuantities)); }
            if (cookiesTotalPrice) { setTotalPrice(Number(cookiesTotalPrice)); }
        }
    }

    return (
        <Box>
            <Head>
                <title>Block Store</title>
                <link rel="shortcut icon" href="/favicon.ico"/>
            </Head>
            <main>
                { children }
            </main>
        </Box>
    )
}

export default Layout;