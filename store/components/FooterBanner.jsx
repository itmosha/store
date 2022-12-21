import React from 'react';
import Link from 'next/link';

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
                    <Link href="/product/socks-1">
                        <button type="button">Текст для кнопки</button>
                    </Link>
                </div>
                <img
                    src={ 'http://127.0.0.1:8000/media/images/Socks.png'}
                    className="footer-banner-image"
                />
            </div>
        </div>
    )
}

export default FooterBanner