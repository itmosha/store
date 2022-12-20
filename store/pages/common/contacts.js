import React from 'react';
import { AiFillMail, AiFillPhone } from "react-icons/ai";

const ContactsPage = () => {
    return (
        <div className="common-page">
            <div className="common-page-info-container">
                <div className="common-page-heading">
                    <h1> Контакты </h1>
                </div>

                <div className="contacts-page-info">
                    <h4>Если у вас есть вопросы, напишите их на почту: </h4>
                    <div className="contacts-page-element">
                        < AiFillMail />
                        <h4>balkunov.s@mail.ru</h4>
                    </div>
                    <h4>Контактный номер телефона:</h4>
                    <div className="contacts-page-element">
                        < AiFillPhone />
                        <h4>+7(900)-994-35-34</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactsPage