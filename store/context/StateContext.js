import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import cart from "../components/Cart";
import { setCookie, getCookie } from "cookies-next";

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);
    const [deliveryRussia, setDeliveryRussia] = useState(false);
    const [deliverySPb, setDeliverySPb] = useState(false);

    let foundProduct;
    let index;


    const toggleDeliveryRussia = () => {
        if (deliveryRussia) {
            setDeliveryRussia(!deliveryRussia);
        } else {
            setDeliverySPb((deliverySPb) => { deliverySPb = false; });
            setDeliveryRussia(!deliveryRussia);
        }
    }

    const toggleDeliverySPb = () => {
        if (deliverySPb) {
            setDeliverySPb(!deliverySPb);
        } else {
            setDeliveryRussia((deliveryRussia) => { deliveryRussia = false; });
            setDeliverySPb(!deliverySPb);
        }
    }

    const onAdd = (product, quantity) => {

        const checkProductInCart = cartItems.find((item) => item._id === product._id);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

        if (checkProductInCart) {
            const updatedCartItems = cartItems.map((cartProduct) => {
                if (cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                };
                else return {
                    ...cartProduct
                };
            })

            setCartItems(updatedCartItems);

            setCookie('cookieCartItems', updatedCartItems);
            // alert(`Cookie: ${ getCookie('cookieCartItems') }`);
        } else {
            product.quantity = quantity;
            setCartItems([...cartItems, { ...product }]);

            setCookie('cookieCartItems', [...cartItems, { ...product }]);
            // alert(`Cookie: ${ getCookie('cookieCartItems') }`);
        }
        toast.success(`Добавлено в корзину: ${qty} ${product.name}`);
    }

    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item._id === product._id);
        const newCartItems = cartItems.filter((item) => item._id !== product._id);

        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
        setCartItems(newCartItems);

        setCookie('cookieCartItems', newCartItems);
    }

    const toggleCartItemQuantity = (id, value) => {
        foundProduct = cartItems.find((item) => item._id === id);
        index = cartItems.findIndex((product) => product._id === id);

        if (value === 'inc') {
            // setCartItems( prevCartItems =>
            //     prevCartItems.map( item => {
            //         if (item._id === id){
            //             return {...item, quantity: foundProduct.quantity + 1}
            //         }
            //         return item
            //     })
            //);

            const newCartItems = cartItems.map(item => {
                if (item._id === id) {
                    return {...item, quantity: foundProduct.quantity + 1}
                } return item
            });
            setCartItems(newCartItems);

            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
            setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1);
            setCookie('cookieCartItems', newCartItems);

        } else if (value === 'dec') {
            if (foundProduct.quantity > 1) {
                // setCartItems( prevCartItems =>
                //     prevCartItems.map( item => {
                //         if (item._id === id){
                //             return {...item, quantity: foundProduct.quantity - 1}
                //         }
                //         return item
                //     })
                // );

                const newCartItems = cartItems.map(item => {
                    if (item._id === id) {
                        return {...item, quantity: foundProduct.quantity - 1}
                    } return item
                });
                setCartItems(newCartItems)

                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
                setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1);
                setCookie('cookieCartItems', newCartItems);
            }
        }
    }

    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }

    const decQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1;
            return prevQty - 1;
        });
    }

    return (
        <Context.Provider
            value={{
                showCart,
                setShowCart,
                cartItems,
                totalPrice,
                totalQuantities,
                qty,
                incQty,
                decQty,
                onAdd,
                toggleCartItemQuantity,
                onRemove,
                deliverySPb,
                deliveryRussia,
                setDeliverySPb,
                setDeliveryRussia,
                toggleDeliverySPb,
                toggleDeliveryRussia,
            }}
        >
            { children }
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);