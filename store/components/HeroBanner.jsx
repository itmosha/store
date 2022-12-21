import React from 'react';
import Link from 'next/link';


const HeroBanner = () => {
    return (
        <div className="hero-banner-container">
            <div>
                <p className="hero-banner-small-text">Маленький текст</p>
                <h3 className="hero-banner-mid-text">Средний текст</h3>
                <h1 className="hero-banner-large-text">Большой текст</h1>
                <img src={ 'http://127.0.0.1:8000/media/images/Socks.png' } alt="" className="hero-banner-image" />

                <div>
                    <Link href="/product/socks-1">
                        <button type="button">Текст на кнопке</button>
                    </Link>
                    <div className="hero-banner-desc">
                        <h5>ОПИСАНИЕ</h5>
                        <p>Описание</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner