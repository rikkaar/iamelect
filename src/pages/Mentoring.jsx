import React from 'react';
import OrderForm from "../components/OrderForm.jsx";
import QnaList from "../components/QnaList.jsx";
import {qnaGeneral} from "../consts/qnaConst.jsx";
import Carousel from "../components/Carousel.jsx";
import AnimatedPage from "../components/AnimatedPage.jsx";
import pic1 from "@assets/IMG_1689.jpg"
import pic2 from "@assets/glass.jpg"
import { Helmet } from 'react-helmet';

const Mentoring = () => {
    return (
        <AnimatedPage>
            <Helmet>
                <title>Наставничество</title>
            </Helmet>
            <div className={"content"}>
                <div className={"service-wrapper"}>
                    <section className={"service-item service-item__grid"}>
                        <div className="service-item__content">
                            <h1 className={"service-item__title h1"}>Наставничество</h1>
                            <div className="service-item__description grid2">
                                <div className="service-item__description-container mentoring">
                                    <p className={"h4"}>Помогу тебе проявиться, открыться миру и заявить о себе! </p>
                                    <div className={"service-item__subset"}>
                                        <p className={"service-item__subset__length-title"}>Длительность:</p>
                                        <p className={"service-item__subset__length"}>1 месяц</p>
                                    </div>
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
                        <h2 className={"title h2"}>Что входит в услугу </h2>
                        <ul className={"section__list"}>
                            <li className={"section__list__item body1"}>
                                Персональное обучение ведению инстаграм в любой нише
                            </li>
                            <li className={"section__list__item body1"}>
                                Обучение съемкам рилсов, созданию сценарием к роликам
                            </li>
                            <li className={"section__list__item body1"}>
                                Расстановка света, монтаж, поиск идей, оформление страницы
                            </li>
                            <li className={"section__list__item body1"}>
                                Создание воронок продаж и своего продукта
                            </li>
                        </ul>
                    </div>
                </section>
                <section className={"how container"}>
                    <h2 className={"title h2 program__title"}>Как проходит курс</h2>
                    <div className="grid3">
                        <div className="how-section body1">
                            Созвоны 2 раза в неделю по 1:30 часа по пн и ср.
                        </div>
                        <div className="how-section body1">
                            Домашние задания и их проверка
                        </div>
                        <div className="how-section body1">
                            Ответы на любые вопросы в течение месяца
                        </div>
                    </div>
                </section>
                <section className={"service-price container"}>
                    <h4 className={"service-price__title"}>Как попасть на курс</h4>
                    <div className="service-price__options">
                        <div className="service-price__option">
                            <h3 className={"service-price__option__price"}>Уже скоро...</h3>
                        </div>
                    </div>
                </section>
                <section id={"payment"} className={"beige-bg"}>
                    <div className={"order order-container order__grid"}>
                        <div className="order-form__main-page-wrapper">
                            <OrderForm serviceId={6} preorder={true}/>
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

export default Mentoring;