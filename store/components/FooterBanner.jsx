import React from 'react';
import Link from 'next/link';
import footerBannerImage from '../public/footer-banner-image.png';

const FooterBanner = () => {
    return (
        <div className="footer-banner-container">
            <div className="banner-desc">
                <div className="left">
                    <p>Успейте купить!</p>
                    <h3>Подарочный набор</h3>
                    <p>Приятный подарок на Новый Год</p>
                </div>
                <img
                    src={ footerBannerImage.src }
                    className="footer-banner-image"
                    alt="footer-banner-image"
                />
                <div className="right">
                    {/*<p>Маленький текст</p>*/}
                    <h3>Новогодний</h3>
                    <p>Ручная работа</p>
                    <Link href="/product/present-large-1">
                        <button type="button">Посмотреть</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FooterBanner