import React from 'react';
import Link from 'next/link';
import { MdAttachMoney } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
import {error} from "next/dist/build/output/log";

const ContactsPage = () => {

    const submitIndex = async (event) => {
        event.preventDefault();
        const index = event.target.index.value;

        // const url =
        const result = await fetch(url);
        const res = await result.json();

        //alert(res);
    };

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
                        <p>Стоимость доставки - 150 рублей</p>
                    </div>

                    <div className="delivery-param">
                        <AiOutlineFieldTime size={22} />
                        <p>Время доставки - в течение трёх дней</p>
                    </div>

                    <div className="delivery-info-element">
                        <h3>Доставка Почтой России</h3>
                        <p>Доставка осуществляется Почтой России по всей территории РФ.</p>
                        <p>Стоимость доставки рассчитывается исходя из тарифов Почты России.</p>
                    </div>

                    <div className="delivery-calculate">
                        <h3>Рассчитать стоимость доставки</h3>

                        <form onSubmit={ submitIndex }>
                            <label htmlFor="index">Index</label>
                            <input
                                id="index"
                                name="index"
                                type="text"
                                minLength="1"
                                maxLength="6"
                                required
                            />
                            <button type="submit">
                                Submit
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default ContactsPage

