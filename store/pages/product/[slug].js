import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Product } from "../../components";
import { useStateContext } from '../../context/StateContext';


const ProductDetails = ({ product, products }) => {
    const { images, title, price, description } = product;
    const [ index, setIndex ] = useState(0);
    const { decQty, incQty, qty, onAdd } = useStateContext();

    return (
        <div>
            <div className="product-detail-container">
                <div>
                    <div className="image-container">
                        <img src={ images[index]?.image ? images[index].image : images[0].image } className="product-detail-image" />
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
                <div className="product-detail-desc">
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
                            <span className="plus" onClick={ incQty }>
                                <AiOutlinePlus />
                            </span>
                        </p>
                    </div>
                    <div className="buttons">
                        <button
                            type="button"
                            className="add-to-cart"
                            onClick={ () => onAdd(product, qty) }>
                            Добавить в корзину
                        </button>
                    </div>
                </div>
            </div>
            <div className="maylike-products-wrapper">
                <h2>Вам также может понравиться:</h2>
                <div className="marquee">
                    <div className="maylike-products-container track">
                        { products.map((item) => (
                            <Product
                                key={item.slug}
                                product={item}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {

    // const productsQuery = await fetch(`http://${process.env.BACKEND_IP}:${process.env.BACKEND_PORT}/api/items`);
    const productsQuery = await fetch(`http://127.0.0.1:8000/api/items`);

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

    const productQuery = await fetch(`http://127.0.0.1:8000/api/items/${slug}`);
    const product = await productQuery.json();

    const productsQuery = await fetch(`http://127.0.0.1:8000/api/items`);
    const products = await productsQuery.json();

    return {
        props: { products, product }
    }
}

export default ProductDetails