import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useStateContext } from '../../context/StateContext';
import DefaultPresentImage from '../../public/default_present.png';

const ProductDetails = ({ product }) => {
    const { images, title, price, description, quantity_in_stock } = product;
    const [ index, setIndex ] = useState(0);
    const { decQty, incQty, qty, onAdd } = useStateContext();

    return (
        <div className="product-page">
                <div>
                    <div>
                        <img src={ images[index]?.image ? images[index].image : (images[0]?.image ? images[0].image : DefaultPresentImage.src ) } className="product-detail-image" />
                    </div>

                    <div className="small-images-container">
                        {images?.map((item, i) => (
                            <img
                                src={ images[i].image }
                                className={ i === index ? 'small-image selected-image' : 'small-image' }
                                onMouseEnter={() => setIndex(i)}
                            />
                        ))}
                    </div>
                </div>

            <div className="product-page-details">
                    <h1>{ title }</h1>

                    <h4>Описание: </h4>
                    <p>{ description }</p>
                    <p className="price">₽ { price }</p>
                    <div className="quantity">
                        <h3>Количество: </h3>
                        <p className="quantity-desc">
                            <span className="minus" onClick={ decQty }>
                                <AiOutlineMinus />
                            </span>
                            <span className="num">
                                { qty }
                            </span>
                            { quantity_in_stock > qty ? (
                                <span className="plus" onClick={ incQty }>
                                    <AiOutlinePlus />
                                </span>
                            ) : (
                                <span className="plus">
                                    <AiOutlinePlus />
                                </span>
                            )
                            }
                        </p>
                    </div>
                    <div className="add-to-cart-button">
                        <button
                            type="button"
                            className="add-to-cart"
                            onClick={ () => onAdd(product, qty) }>
                            Добавить в корзину
                        </button>
                    </div>
                </div>
        </div>
    )
}

export const getStaticPaths = async () => {

    // const productsQuery = await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOSTNAME}/api/items`);
    const productsQuery = await  fetch('http://127.0.0.1:8000/api/items');

    const products = await productsQuery.json();

    const paths = products.map((product) => ({
        params: {
            slug: product.slug
        }
    }));
    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug } }) => {

    // const productQuery = await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOSTNAME}/api/items/${slug}`);
    const productQuery = await fetch(`http://127.0.0.1:8000/api/items/${slug}`);
    const product = await productQuery.json();

    return {
        props: { product }
    }
}

export default ProductDetails