import React from 'react';
import Head from 'next/head';
import Footer from "./Footer";

const Layout = ({ children }) => {

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

export default Layout