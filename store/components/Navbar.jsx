import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from './';
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext();

    return (
        <div>
        <header className="header">
            <div className="header-container">

                <div className="header-logo">
                    <p>
                        <Link href="/">Block Store</Link>
                    </p>
                </div>

                <div className="header-cart-icon">
                    <button type="button" className="cart-icon" onClick={ () => setShowCart(true) }>
                        <AiOutlineShopping />
                        <span className="cart-item-qty">{ totalQuantities }</span>
                    </button>
                </div>
            </div>

        </header>
            { showCart && <Cart /> }
        </div>
    )
}

export default Navbar