import React from 'react';
import pic5 from "../assets/IMG_1689.JPG";
import OrderForm from "../components/OrderForm.jsx";
import picPayment from "../assets/IMG_9586.JPG";
import QnaList from "../components/QnaList.jsx";
import {qnaGeneral} from "../consts/qnaConst.jsx";

const BabyStyle = () => {
    return (
        <div className={"content"}>
            <section className={"service-item container service-item__grid"}>
                <div className="service-item__content">
                    <h1 className={"service-item__title"}>Стильный малыш</h1>
                    <div className="service-item__description grid2">
                        <div className="service-item__description-container">
                            <p className={"service-item__p"}>как одевать ребенка стильно в любом возрасте</p>
                        </div>
                    </div>
                </div>
                <div
                    className={"service-item__img"}
                    style={{backgroundImage: `url(/src/assets/BabyWatchin.jpg)`}}>
                </div>
            </section>
            <section className="inside container grid3">
                <div className="inside__container">
                    <h2 className={"title"}>Что входит в гайд?</h2>
                    <ul className={"section__list"}>
                        <li className={"section__list__item"}>
                            Подробное описание каждой вещи в гардеробе ребенка (Какую выбрать модель, цвет, длину, принт и тд)
                        </li>
                        <li className={"section__list__item"}>
                            Цветовые сочетания, самый простой и беспроигрышный способ сочетать цвета.
                        </li>
                        <li className={"section__list__item"}>
                            Создание капсульного гардероба, где все со всем сочетается.
                        </li>
                        <li className={"section__list__item"}>
                            Работаю с масс маркетом и люкс сегментом
                        </li>
                        <li className={"section__list__item"}>
                            Вы научитесь выбирать вещи, которые выглядят дорого и стильно за те же деньги, которые вы тратили на одежду раньше.
                        </li>
                    </ul>
                </div>
            </section>
            <section className="who container">
                <h2 className={"title"}>Кому подойдет?</h2>
                <div className="who__container grid3 who__grid">
                    <div className="block-section">
                        Молодым мамам, у которых только появился малыш
                    </div>
                    <div className="block-section span2 block-section__span2">
                        Опытным мамам, которые хотят разобрать гардероб детей и сэкономить деньги
                    </div>
                    <div className="block-section block-section__img--arrow">
                    </div>
                    <div className="block-section block-section__img">
                    </div>
                    <div className="block-section">
                        Тем, кто только планирует малыша и хочет быть во всеоружии
                    </div>
                </div>
            </section>
            {/*<section className={"service-price container"}>*/}
            {/*    <h4 className={"service-price__title"}>Стоимость:</h4>*/}
            {/*    <div className="service-price__options">*/}
            {/*        <div className="service-price__option">*/}
            {/*            <h3 className={"service-price__option__price"}>15.000 ₽</h3>*/}
            {/*            <span className={"service-price__option__type"}>(оффлайн)</span>*/}
            {/*        </div>*/}
            {/*        <div className="service-price__option">*/}
            {/*            <h3 className={"service-price__option__price"}>20.000 ₽</h3>*/}
            {/*            <span className={"service-price__option__type"}>(онлайн)</span>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            <section className={"service-price container"}>
                <h4 className={"service-price__title"}>Стоимость:</h4>
                <div className="service-price__options">
                    <div className="service-price__option">
                        <h3 className={"service-price__option__price"}>900 ₽</h3>
                    </div>
                </div>
            </section>
            <section className={"beige-bg"}>
                <div className={"order order-container order__grid"}>
                    <div className="order-form__main-page-wrapper">
                        <OrderForm serviceId={0}/>
                    </div>
                    <div className="order__pict"
                         style={{backgroundImage: `url(/src/assets/BabyWatchin.jpg)`}}>
                    </div>
                </div>
            </section>
            <QnaList qnaList={qnaGeneral}/>
        </div>

    );
};

export default BabyStyle;