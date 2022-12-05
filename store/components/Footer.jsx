import React from 'react';
import { SlSocialVkontakte } from "react-icons/sl";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-info-container">
                <h4>
                    <Link href="/common/contacts">Контакты</Link>
                </h4>
                <h4>
                    <Link href="/common/delivery">Доставка</Link>
                </h4>

                <p>
                    ИНН: ------------
                </p>
            </div>

            <p>2022 Block Store</p>
            <p>Все права защищены</p>
            <p className="icons">
                <Link href="/">
                    <SlSocialVkontakte />
                </Link>
                <Link href="/">
                    <FaTelegramPlane />
                </Link>
            </p>
        </div>
    )
}

export default Footer