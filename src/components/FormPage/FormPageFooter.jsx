import React from 'react';
import '../.././styles/FormPage/formPageFooter.css';

const FormPageFooter = () => {
    return (
        <footer className="form-page-footer">
            <div className="form-page-footer__container">
                <ul className="form-page-footer__list">
                    <li className="form-page-footer__list-text">
                        <h2>© ФГАОУ ВО “УрФУ имени первого Президента России Б. Н. Ельцина”</h2>
                        <p>Инстутит радиоэлектроники и информационных технологий - РТФ</p>
                    </li>
                    <li className="form-page-footer__list-contacts">
                        <p className="form-page-footer__heading">Контакты</p>
                        <ul>
                            <li><a href="mailto:project.irit@urfu.ru">Написать нам</a></li>
                            <li><p>Екатеринбург, ул. Мира 32</p></li>
                        </ul>
                    </li>
                    <li className="form-page-footer__list-social">
                        <p className="form-page-footer__heading">Мы в социальных сетях</p>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default FormPageFooter;
