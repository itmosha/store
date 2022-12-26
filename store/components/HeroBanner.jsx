import React from 'react';
import Link from 'next/link';
import headerBannerImage from '../public/header-banner-image.png';

const HeroBanner = () => {
    return (
        <div className="hero-banner-container">
            <div>
                <p className="hero-banner-small-text">Успейте купить!</p>
                <h3 className="hero-banner-mid-text">C чаем, мёдом и сладостями</h3>
                <h1 className="hero-banner-large-text">Наборы в подарок</h1>
                <img src={ headerBannerImage.src } alt="header-banner-image" className="hero-banner-image" />

                <div>
                    <Link href="/product/present-medium-2">
                        <button type="button">Посмотреть</button>
                    </Link>
                    <div className="hero-banner-desc">
                        <h5>Доставка</h5>
                        <p>по Санкт-Петербургу</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner