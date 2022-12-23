import React from 'react';
import Link from 'next/link';


const Product = ({ product: { images, title, slug, price } }) => {
    return (
        <div>
            <Link href={`/product/${slug}`}>
                <div className="product-card">
                    <img
                        src={images[0].image}
                        width={250}
                        height={250}
                        className="product-image"
                    />
                    <p className="product-name">{ title }</p>
                    <p className="product-price">₽ { price }</p>
                </div>
            </Link>
        </div>
    )
}

export default Product