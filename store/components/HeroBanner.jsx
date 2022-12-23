import React from 'react';
import Link from 'next/link';
import headerBannerImage from '../public/header-banner-image.png';

const HeroBanner = () => {
    return (
        <div className="hero-banner-container">
            <div>
                <p className="hero-banner-small-text">Маленький текст</p>
                <h3 className="hero-banner-mid-text">Средний текст</h3>
                <h1 className="hero-banner-large-text">Большой текст</h1>
                <img src={ headerBannerImage.src } alt="header-banner-image" className="hero-banner-image" />

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