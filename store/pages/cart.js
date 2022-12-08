import React from 'react';
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import Link from 'next/link';

const CartPage = () => {
    const { totalPrice, cartItems, toggleCartItemQuantity, onRemove, deliveryRussia, toggleDeliveryRussia, deliverySPb, toggleDeliverySPb } = useStateContext();

    return (
        <div className="cart-page">
            <div className="cart-product-container">
                <h1>Оформление заказа</h1>
                <div className="cart-product-items">
                { cartItems.length >= 1 && cartItems.map((item) => (
                    <div className="product" key={item._id}>
                        <img src={ urlFor(item?.image[0]) } className="cart-product-image" />
                        <div className="item-desc">
                            <div className="flex top">
                                <h5>{ item.name }</h5>
                                <h4>₽       { item.price }</h4>
                            </div>
                            <div className="flex bottom">
                                <div>
                                    <p className="quantity-desc">
                                        <span className="minus" onClick={ () => toggleCartItemQuantity(item._id, 'dec') }><AiOutlineMinus /></span>
                                        <span className="num">{ item.quantity }</span>
                                        <span className="plus" onClick={ () => toggleCartItemQuantity(item._id, 'inc') }><AiOutlinePlus /></span>
                                    </p>
                                </div>
                                <button type="button" className="remove-item" onClick={ () => onRemove(item) }>
                                    <TiDeleteOutline />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                </div>

                <div className="cart-product-info">
                    <div className="cart-product-delivery">

                        <h3>Способ доставки:</h3>

                        <div className="checkbox-wrapper">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={ deliveryRussia }
                                    onChange={ () => toggleDeliveryRussia() }
                                />
                                <span>Доставка Почтой России</span>
                            </label>
                        </div>

                        <div className="checkbox-wrapper">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={ deliverySPb }
                                    onChange={ () => toggleDeliverySPb() }
                                />
                                <span>Доставка по Санкт-Петербургу</span>
                            </label>
                        </div>

                        {/*{ cartItems.length >= 1 && (*/}
                        {/*    <div>*/}
                        {/*        <h3>Сумма заказа:</h3>*/}
                        {/*        <h3>₽ { totalPrice }</h3>*/}
                        {/*    </div>*/}
                        {/*) }*/}

                        { deliverySPb && (
                            <div>
                                <h1>Доставка по Санкт-Петербургу</h1>
                                <h3>Сумма заказа:</h3>
                                <h3>₽ { totalPrice }</h3>
                            </div>
                        ) }
                        { deliveryRussia && (
                            <div>
                                <h1>Доставка Почтой России</h1>
                                <h3>Сумма заказа:</h3>
                                <h3>₽ { totalPrice }</h3>
                            </div>
                        ) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage;