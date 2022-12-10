import React from 'react';
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import Link from 'next/link';

const CartPage = () => {
    const { totalPrice, totalQuantity, cartItems, toggleCartItemQuantity, onRemove, deliveryRussia, toggleDeliveryRussia, deliverySPb, toggleDeliverySPb } = useStateContext();

    return (
        <div className="cart-page">
            <div className="cart-product-container">
                <h1>Оформление заказа</h1>
                <div className="cart-product-items">
                    <h2>Список товаров</h2>
                { cartItems.length >= 1 ? cartItems.map((item) => (
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
                )) :
                    <div className="cart-empty">
                        <span>Список товаров пуст. Перейдите в каталог чтобы добавить товары</span>
                        <Link href="/">
                            <button className="go-to-items">
                                Перейти в каталог
                            </button>
                        </Link>
                    </div>
                }
                </div>

                { cartItems.length >= 1 && (
                <div className="cart-product-info">
                    <div className="cart-product-delivery">

                        <h2>Способ доставки:</h2>

                        <div className="checkbox-wrapper">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={ deliveryRussia }
                                    onChange={ () => toggleDeliveryRussia() }
                                />
                                <svg
                                    className={ `checkbox ${ deliveryRussia ? "checkbox--active": "" }` }
                                    aria-hidden="true"
                                    viewBox="0 0 15 11"
                                    fill="none"
                                >
                                    <path
                                        d="M1 4.5L5 9L14 1"
                                        strokeWidth="2"
                                        stroke={ deliveryRussia ? "#fff" : "none" }
                                    />
                                </svg>
                                Доставка Почтой России
                            </label>
                        </div>

                        <div className="checkbox-wrapper">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={ deliverySPb }
                                    onChange={ () => toggleDeliverySPb() }
                                />
                                <svg
                                    className={ `checkbox ${ deliverySPb ? "checkbox--active" : "" }` }
                                    aria-hidden="true"
                                    viewBox="0 0 15 11"
                                    fill="none"
                                >
                                    <path
                                        d="M1 4.5L5 9L14 1"
                                        strokeWidth="2"
                                        stroke={ deliverySPb ? "#fff" : "none"}
                                    />
                                </svg>
                                Доставка курьером по Санкт-Петербургу
                            </label>
                        </div>

                        {/*{ cartItems.length >= 1 && (*/}
                        {/*    <div>*/}
                        {/*        <h3>Сумма заказа:</h3>*/}
                        {/*        <h3>₽ { totalPrice }</h3>*/}
                        {/*    </div>*/}
                        {/*) }*/}
                    </div>

                    { (deliverySPb || deliveryRussia) && (
                        <div className="cart-product-cost">
                            <h2>Ваш заказ</h2>
                            {deliverySPb && (
                                <div>
                                    <div className="price-tag">
                                        <span>Сумма заказа:</span>
                                        <span>{totalPrice} ₽</span>
                                    </div>
                                    <div className="price-tag">
                                        <span>Стоимость доставки:</span>
                                        <span>150 ₽</span>
                                    </div>
                                    <div className="summary-price">
                                        <span>Итого:</span>
                                        <span>{totalPrice + 150} ₽</span>
                                    </div>
                                </div>
                            )}
                            {deliveryRussia && (
                                <div>
                                    <div className="price-tag">
                                        <span>Сумма заказа:</span>
                                        <span>{totalPrice} ₽</span>
                                    </div>
                                    <div className="price-tag">
                                        <span>Стоимость доставки:</span>
                                        <span>0 ₽</span>
                                    </div>
                                    <div className="summary-price">
                                        <span>Итого:</span>
                                        <span>{totalPrice} ₽ </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) }
                </div>
                )}
            </div>
        </div>
    )
}

export default CartPage;