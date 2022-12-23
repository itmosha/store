import React from 'react';
import { MdAttachMoney } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";

const ContactsPage = () => {

    return (
        <div className="common-page">
            <div className="common-page-info-container">
                <div className="common-page-heading">
                    <h1> Доставка </h1>
                </div>

                <div className="delivery-page-info">
                    <div className="delivery-info-element">
                        <h3>Доставка по Санкт-Петербургу</h3>
                        <p>По Санкт-Петербургу возможна доставка курьером</p>
                    </div>

                    <div className="delivery-param">
                        <MdAttachMoney size={22} />
                        <p>Стоимость доставки - 100 рублей</p>
                    </div>

                    <div className="delivery-param">
                        <AiOutlineFieldTime size={22} />
                        <p>Время доставки - в течение трёх дней</p>
                    </div>

                    <div className="delivery-info-element">
                        <h3>Доставка Почтой России</h3>
                        <p>Доставка осуществляется Почтой России по всей территории РФ.</p>
                    </div>

                    <div className="delivery-param">
                        <MdAttachMoney size={22} />
                        <p>Стоимость доставки - 200 рублей</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ContactsPage

