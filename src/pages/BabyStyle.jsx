import React from 'react';
import OrderForm from "../components/OrderForm.jsx";
import QnaList from "../components/QnaList.jsx";
import {qnaGeneral} from "../consts/qnaConst.jsx";
import Carousel from "../components/Carousel.jsx";
import AnimatedPage from "../components/AnimatedPage.jsx";
import pic1 from "/src/assets/babyWatchin__page.jpg"
import pic2 from "/src/assets/glass.jpg"

const BabyStyle = () => {
    return (
        <AnimatedPage>
            <div className={"content"}>
                <div className={"service-wrapper"}>
                    <section className={"service-item service-item__grid"}>
                        <div className="service-item__content">
                            <h1 className={"service-item__title h1"}>Стильный малыш</h1>
                            <div className="service-item__description grid2">
                                <div className="service-item__description-container">
                                    <p className={"h4"}>как одевать ребенка стильно в любом возрасте</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className={"service-item__img"}
                            style={{backgroundImage: `url(${pic1})`}}>
                        </div>
                    </section>
                </div>
                <section className="inside container grid3">
                    <div className="inside__container">
                        <h2 className={"title h2"}>Что входит в гайд?</h2>
                        <ul className={"section__list"}>
                            <li className={"section__list__item body1"}>
                                Подробное описание каждой вещи в гардеробе ребенка (Какую выбрать модель, цвет, длину, принт
                                и тд)
                            </li>
                            <li className={"section__list__item body1"}>
                                Цветовые сочетания, самый простой и беспроигрышный способ сочетать цвета.
                            </li>
                            <li className={"section__list__item body1"}>
                                Создание капсульного гардероба, где все со всем сочетается.
                            </li>
                            <li className={"section__list__item body1"}>
                                Работаю с масс маркетом и люкс сегментом
                            </li>
                            <li className={"section__list__item body1"}>
                                Вы научитесь выбирать вещи, которые выглядят дорого и стильно за те же деньги, которые вы
                                тратили на одежду раньше.
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="who container">
                    <h2 className={"title h2"}>Кому подойдет?</h2>
                    <div className="grid3 who__container">
                        <div className="block-section body1">
                            Молодым мамам, у которых только появился малыш
                        </div>
                        <div className="block-section body1 span2 block-section__span2">
                            Опытным мамам, которые хотят разобрать гардероб детей и сэкономить деньги
                        </div>
                        <div className="block-section body1 block-section__img--arrow">
                        </div>
                        <div className="block-section body1 block-section__img">
                        </div>
                        <div className="block-section body1">
                            Тем, кто только планирует малыша и хочет быть во всеоружии
                        </div>
                    </div>
                </section>
                <section className={"service-price container"}>
                    <h4 className={"service-price__title"}>Стоимость:</h4>
                    <div className="service-price__options">
                        <div className="service-price__option">
                            <h3 className={"service-price__option__price"}>900 ₽</h3>
                        </div>
                    </div>
                </section>
                <section id={"payment"} className={"beige-bg"}>
                    <div className={"order order-container order__grid"}>
                        <div className="order-form__main-page-wrapper">
                            <OrderForm serviceId={0}/>
                        </div>
                        <div className="order__pict"
                             style={{backgroundImage: `url(${pic2})`}}>
                        </div>
                    </div>
                </section>
                <QnaList qnaList={qnaGeneral}/>
                <Carousel/>
            </div>
        </AnimatedPage>
    );
};

export default BabyStyle;