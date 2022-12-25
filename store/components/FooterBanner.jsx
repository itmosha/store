import React from 'react';
import Link from 'next/link';
import footerBannerImage from '../public/footer-banner-image.png';

const FooterBanner = () => {
    return (
        <div className="footer-banner-container">
            <div className="banner-desc">
                <div className="left">
                    <p>Маленький текст</p>
                    <h3>Большой текст</h3>
                    <p>Ещё маленький текст</p>
                </div>
                <div className="right">
                    <p>Маленький текст</p>
                    <h3>Средний текст</h3>
                    <p>Описание</p>
                    <Link href="/product/present-large-1">
                        <button type="button">Текст для кнопки</button>
                    </Link>
                </div>
                <img
                    src={ footerBannerImage.src }
                    className="footer-banner-image"
                    alt="footer-banner-image"
                />
            </div>
        </div>
    )
}

export default FooterBanner