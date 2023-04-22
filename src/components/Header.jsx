import React from 'react';

const Header = () => {

    return (
        <header id={"header"} className={"header container"}>
            <div className="header__container">
                <ul className={"header__pages pages"}>
                    <li className={"pages__item"}>
                        <a href="#" className={"pages__link"}>Главная</a>
                    </li>
                    <li className={"pages__item relative"}>
                        <a href="#" className={"pages__link"}>Услуги</a>
                    </li>
                    <li className={"pages__item"}>
                        <a href="#" className={"pages__link"}>Оплата</a>
                    </li >
                    <li className={"pages__item"}>
                        <a href="#" className={"pages__link"}>Контакты</a>
                    </li>
                </ul>
                <ul className="header__social social">
                    <li className="social__item">
                        <a href="#" className="social__link social__link--instagram header__social__link--instagram" aria-label="Перейти в инстаграм"></a>
                    </li>
                    <li className="social__item">
                        <a href="#" className="social__link social__link--whatsapp header__social__link--whatsapp" aria-label="Перейти в ватсап"></a>
                    </li>
                    <li className="social__item">
                        <a href="#" className="social__link social__link--telegram header__social__link--telegram" aria-label="Перейти в телеграм"></a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;