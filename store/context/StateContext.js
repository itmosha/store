import { toast } from 'react-hot-toast';
import { setCookie, getCookie } from "cookies-next";
import React, { createContext, useContext, useState } from 'react';

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

        const checkProductInCart = cartItems.find((item) => item.slug === product.slug);
        let wasAdded = false;

        if (checkProductInCart) {
            //
            // const updatedCartItems = cartItems.map((cartProduct) => {
            //     if (cartProduct.slug === set.slug && set.quantity_in_stock >= cartProduct.quantity + quantity) {
            //         wasAdded = true;
            //         return {
            //             ...cartProduct,
            //             quantity: cartProduct.quantity + quantity
            //         };
            //     } else return {
            //         ...cartProduct
            //     };
            // });
            //
            // if (wasAdded) {
            //     setCartItems(updatedCartItems);
            //
            //     setCookie('cookieCartItems', updatedCartItems);
            // }
        } else {
            product.quantity = quantity;
            setCartItems([...cartItems, { ...product }]);

            setCookie('cookieCartItems', [...cartItems, { ...product }]);
        }

        if (wasAdded || !checkProductInCart) {
            setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
            setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

            setCookie('totalCartQuantities', Number(totalQuantities) + Number(quantity));
            setCookie('totalCartPrice', Number(totalPrice) + Number(product.price * quantity))

            toast.success(`Добавлено в корзину: ${qty} ${product.title}`, {duration: 1500});
        }
    }

    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item.slug === product.slug);
        const newCartItems = cartItems.filter((item) => item.slug !== product.slug);

        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
        setCartItems(newCartItems);

        setCookie('cookieCartItems', newCartItems);
        setCookie('totalCartQuantities', Number(totalQuantities) - Number(foundProduct.quantity));
        setCookie('totalCartPrice', Number(totalPrice) - Number(foundProduct.price * foundProduct.quantity));
    }

    const toggleCartItemQuantity = (id, value) => {
        foundProduct = cartItems.find((item) => item.slug === id);
        index = cartItems.findIndex((product) => product.slug === id);

        if (value === 'inc') {
            let wasIncremented = true;

            const newCartItems = cartItems.map(item => {
                if (item.slug === id) {
                    if (foundProduct.quantity_in_stock > item.quantity) {
                        return {...item, quantity: foundProduct.quantity + 1}
                    } else wasIncremented = false;
                } return item
            });

            if (wasIncremented) {
                setCartItems(newCartItems);

                setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
                setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1);

                setCookie('cookieCartItems', newCartItems);
                setCookie('totalCartPrice', totalPrice + foundProduct.price);
                setCookie('totalCartQuantities', totalQuantities + 1);
            }
        } else if (value === 'dec') {
            if (foundProduct.quantity > 1) {
                const newCartItems = cartItems.map(item => {
                    if (item.slug === id) {
                        return {...item, quantity: foundProduct.quantity - 1}
                    } return item
                });
                setCartItems(newCartItems)

                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
                setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1);

                setCookie('cookieCartItems', newCartItems);
                setCookie('totalCartPrice', Number(totalPrice) - Number(foundProduct.price));
                setCookie('totalCartQuantities', Number(totalQuantities) - 1);
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
                setCartItems,
                setTotalQuantities,
                setTotalPrice,
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
                toggleDeliveryRussia
            }}
        >
            { children }
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);