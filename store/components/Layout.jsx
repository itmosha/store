import React from 'react';
import Head from 'next/head';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useStateContext } from "../context/StateContext";

const Layout = ({ children }) => {
    const { checkForRefresh } = useStateContext();

    return (
        <div className="layout" onLoad={checkForRefresh()}>
            <Head>
                <title>Block Store</title>
                <link rel="shortcut icon" href="/favicon.ico"/>
            </Head>
            <Navbar />
            <main className="main-container">
                { children }
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout