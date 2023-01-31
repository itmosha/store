import { toast } from 'react-hot-toast';
import { setCookie } from "cookies-next";
import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartLegoSets, setCartLegoSets] = useState([]);
    const [cartMinifigures, setCartMinifigures] = useState([]);
    const [cartParts, setCartParts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);

    const onAddLegoSet = (legoSet) => {
        const checkLegoSetInCart = cartLegoSets.find((cartLegoSet) => cartLegoSet.slug === legoSet.slug);

        if (!checkLegoSetInCart) {
            legoSet.quantity = 1;

            setCartLegoSets([...cartLegoSets, { ...legoSet }]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice + legoSet.price);
            setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);

            toast.success(`Добавлено в корзину: ${legoSet.title}`);

            setCookie('cookieCartLegoSets', [...cartLegoSets, { ...legoSet }]);
            setCookie('totalCartQuantities', totalQuantities + 1);
            setCookie('totalCartPrice', totalPrice + Number(legoSet.price));
        }
    }

    const onAddMinifigure = (minifigure) => {
        const checkMinifigureInCart = cartMinifigures.find((cartMinifigure) => cartMinifigure.slug === minifigure.slug);

        if (!checkMinifigureInCart) {
            minifigure.quantity = 1;

            setCartMinifigures([...cartMinifigures, { ...minifigure }]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice + minifigure.price);
            setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);

            toast.success(`Добавлено в корзину: ${minifigure.title}`);

            setCookie('cookieCartMinifigures', [...cartMinifigures, { ...minifigure }]);
            setCookie('totalCartQuantities', totalQuantities + 1);
            setCookie('totalCartPrice', totalPrice + Number(minifigure.price));
        }
    }

    const onAddPart = (part, quantity) => {
        const checkPartInCart = cartParts.find((cartPart) => cartPart.slug === part.slug);
        let partWasAdded = false;

        if (checkPartInCart) {
            const updatedCartParts = cartParts.map((cartPart) => {
                if (cartPart.slug === part.slug && part.quantity_in_stock >= cartPart.quantity + quantity) {
                    partWasAdded = true;
                    return {
                        ...cartPart,
                        quantity: cartPart.quantity + quantity
                    };
                } else return {
                    ...cartPart
                };
            });

            if (partWasAdded) {
                setCartParts(updatedCartParts);
                setTotalPrice((prevTotalPrice) => prevTotalPrice + part.price * quantity);
                setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

                toast.success(`Добавлено в корзину: ${part.title}, ${quantity} шт.`);

                setCookie('cookieCartParts', updatedCartParts);
                setCookie('totalCartQuantities', totalQuantities + quantity);
                setCookie('totalCartPrice', totalPrice + Number(part.price * quantity));
            }
        } else if (part.quantity_in_stock >= quantity) {
            part.quantity = quantity;

            setCartParts([...cartParts, { ...part }]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice + part.price * quantity);
            setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

            toast.success(`Добавлено в корзину: ${part.title}, ${quantity} шт.`)

            setCookie('cookieCartParts', [...cartParts, { ...part }]);
            setCookie('totalCartQuantities', totalQuantities + quantity);
            setCookie('totalCartPrice', totalPrice + Number(part.price * quantity));
        }
    }

    const onRemoveLegoSet = (legoSet) => {
        const newCartLegoSets = cartLegoSets.filter((cartLegoSet) => cartLegoSet.slug !== legoSet.slug);

        setCartLegoSets(newCartLegoSets);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - legoSet.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);

        setCookie('cookieCartLegoSets', newCartLegoSets);
        setCookie('totalCartQuantities', totalQuantities - 1);
        setCookie('totalCartPrice', totalPrice - Number(legoSet.price));

        legoSet.quantity = 0;
    }

    const onRemoveMinifigure = (minifigure) => {
        const newCartMinifigures = cartMinifigures.filter((cartMinifigure) => cartMinifigure.slug !== minifigure.slug);

        setCartMinifigures(newCartMinifigures);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - minifigure.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);

        setCookie('cookieCartMinifigures', newCartMinifigures);
        setCookie('totalCartQuantities', totalQuantities - 1);
        setCookie('totalCartPrice', totalPrice - Number(minifigure.price));

        minifigure.quantity = 0;
    }

    const onRemovePart = (part) => {
        const newCartParts = cartParts.filter((cartPart) => cartPart.slug !== part.slug);

        const newPrice = totalPrice - part.quantity * part.price;
        const newQuantity = totalQuantities - part.quantity;

        setCartParts(newCartParts);
        setTotalPrice(newPrice);
        setTotalQuantities(newQuantity);

        setCookie('cookieCartParts', newCartParts);
        setCookie('totalCartQuantities', totalQuantities - part.quantity);
        setCookie('totalCartPrice', totalPrice - Number(part.quantity * part.price));

        part.quantity = 0;
    }

    const toggleCartPartQuantity = (id, value) => {
        const foundPart = cartParts.find((cartPart) => cartPart.slug === id);

        if (value === 'inc') {
            let wasIncremented = false;

            const newCartParts = cartParts.map(cartPart => {
                if (cartPart.slug === id) {
                    if (foundPart.quantity_in_stock > cartPart.quantity) {
                        wasIncremented = true;
                        return {...cartPart, quantity: foundPart.quantity + 1}
                    }
                } return cartPart
            });

            if (wasIncremented) {
                setCartParts(newCartParts);
                setTotalPrice((prevTotalPrice) => prevTotalPrice + foundPart.price);
                setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1);

                setCookie('cookieCartParts', newCartParts);
                setCookie('totalCartPrice', totalPrice + Number(foundPart.price));
                setCookie('totalCartQuantities', totalQuantities + 1);
            }
        } else if (value === 'dec' && foundPart.quantity > 1) {
            const newCartParts = cartParts.map(cartPart => {
                if (cartPart.slug === id) {
                    return {...cartPart, quantity: foundPart.quantity - 1}
                } return cartPart
            });

            setCartParts(newCartParts);
            setTotalPrice((prevTotalPrice) => prevTotalPrice - foundPart.price);
            setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1);

            setCookie('cookieCartParts', newCartParts);
            setCookie('totalCartPrice', totalPrice - Number(foundPart.price));
            setCookie('totalCartQuantities', totalQuantities - 1);
        }
    }

    return (
        <Context.Provider
            value={{
                onAddLegoSet,
                onAddPart,
                onAddMinifigure,
                onRemoveLegoSet,
                onRemovePart,
                onRemoveMinifigure,
                toggleCartPartQuantity,
                cartLegoSets,
                setCartLegoSets,
                cartMinifigures,
                setCartMinifigures,
                cartParts,
                setCartParts,
                showCart,
                setShowCart,
                totalQuantities,
                setTotalQuantities,
                totalPrice,
                setTotalPrice
            }}
        >
            { children }
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);