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
                <h4>
                    <Link href="/common/return">Возврат</Link>
                </h4>
            </div>

            <div className="footer-center">
                <p>2022 Block Store</p>
                <p>Все права защищены</p>
            </div>
                <p className="icons">
                    <Link href="/">
                        <SlSocialVkontakte />
                    </Link>
                    <Link href="/">
                        <FaTelegramPlane />
                    </Link>
                </p>
            <span className="footer-bottom-info">ИНН: 600402090145</span>
            <span className="footer-bottom-info">ИП Балкунов С.И.</span>
        </div>
    )
}

export default Footer