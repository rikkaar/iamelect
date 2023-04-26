import React from 'react';

const Footer = () => {
    return (
        <section id={"footer"} className={"beige-bg"}>
            <div className="footer container grid3">
                <p className={"subtitle-font"}>Остались вопросы?</p>
                <div className="footer__arrow"></div>
                <ul className="footer__social social">
                    <li className="social__item">
                        <a href="#" className="social__link social__link--whatsapp footer__social__link--whatsapp" aria-label="Перейти в ватсап"></a>
                    </li>
                    <li className="social__item">
                        <a href="#" className="social__link social__link--telegram footer__social__link--telegram" aria-label="Перейти в телеграм"></a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Footer;