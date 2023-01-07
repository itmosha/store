import React, { useEffect } from 'react';
import Head from 'next/head';
import { getCookie } from "cookies-next";
import {useStateContext} from "../context/StateContext";

const Layout = ({ children }) => {
    const { setCartItems, setTotalQuantities, setTotalPrice } = useStateContext();

    useEffect(() => {
        const cookies = getCookie('cookieCartItems');
        const quantities = getCookie('totalCartQuantities');
        const price = getCookie('totalCartPrice');

        if (cookies) {
            const items = JSON.parse(cookies);

            setCartItems(items);
            if (quantities) { setTotalQuantities(Number(quantities)); }
            if (price) { setTotalPrice(Number(price)); }
        }
    });

    return (
        <div className="layout">
            <Head>
                <title>Block Store</title>
                <link rel="shortcut icon" href="/favicon.ico"/>
            </Head>
            <main>
                { children }
            </main>
        </div>
    )
}

export default Layout;