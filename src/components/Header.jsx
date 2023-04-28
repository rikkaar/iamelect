import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Link as Scroll} from 'react-scroll'


const Header = () => {
    return (
        <header id={"header"} className={"header container"}>
            <div className="header__container">
                <ul className={"header__pages pages"}>
                    <li className={"pages__item"}>
                        <Link to={"/"} className={"pages__link body2"}>Главная</Link>
                    </li>
                    <li className={"pages__item relative"}>
                        <Scroll spy={true} smooth={true} offset={50} duration={1000} to={"services"} className={"pages__link body2"}>Услуги</Scroll>
                    </li>
                    <li className={"pages__item"}>
                        <Scroll spy={true} smooth={true} offset={50} duration={1000} to={"payment"} className={"pages__link body2"}>Оплата</Scroll>
                    </li >
                </ul>
                <ul className="header__social social">
                    <li className="social__item">
                        <Link to={"/"} className="social__link social__link--instagram header__social__link--instagram" aria-label="Перейти в инстаграм"></Link>
                    </li>
                    <li className="social__item">
                        <Link to={"/"} className="social__link social__link--whatsapp header__social__link--whatsapp" aria-label="Перейти в ватсап"></Link>
                    </li>
                    <li className="social__item">
                        <Link to={"/"} className="social__link social__link--telegram header__social__link--telegram" aria-label="Перейти в телеграм"></Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;