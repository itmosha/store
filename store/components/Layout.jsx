import React, { useEffect } from 'react';
import Head from 'next/head';
import { getCookie } from "cookies-next";
import { useStateContext } from "../context/StateContext";
import {Box} from "@chakra-ui/react";

const Layout = ({ children }) => {
    const { setCartLegoSets, setCartMinifigures, setCartParts, setTotalQuantities, setTotalPrice } = useStateContext();

    const cookiesCartLegoSets = getCookie('cookieCartLegoSets');
    const cookiesCartMinifigures = getCookie('cookieCartMinifigures');
    const cookiesCartParts = getCookie('cookieCartParts');
    const cookiesTotalQuantities = getCookie('totalCartQuantities');
    const cookiesTotalPrice = getCookie('totalCartPrice')

    useEffect(() => {
        GetCookies();
    }, []);

    const GetCookies = () => {
        if (cookiesCartLegoSets) {
            const cartLegoSets = JSON.parse(cookiesCartLegoSets);
            setCartLegoSets(cartLegoSets);
        }
        if (cookiesCartMinifigures) {
            const cartMinifigures = JSON.parse(cookiesCartMinifigures);
            setCartMinifigures(cartMinifigures);
        }
        if (cookiesCartParts) {
            const cartParts = JSON.parse(cookiesCartParts);
            setCartParts(cartParts);
        }
        if (cookiesTotalQuantities) { setTotalQuantities(Number(cookiesTotalQuantities)); }
        if (cookiesTotalPrice) { setTotalPrice(Number(cookiesTotalPrice)); }
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