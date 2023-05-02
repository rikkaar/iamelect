import React from 'react';
import OrderForm from "../components/OrderForm.jsx";
import QnaList from "../components/QnaList.jsx";
import {qnaGeneral} from "../consts/qnaConst.jsx";
import Carousel from "../components/Carousel.jsx";
import AnimatedPage from "../components/AnimatedPage.jsx";
import pic1 from "@assets/whiteasd.jpg"
import pic2 from "@assets/glass.jpg"
import {wardrobeServices} from "../consts/orderConsts.js";
import { Helmet } from 'react-helmet';

const Wardrobe = () => {
    return (
        <AnimatedPage>
            <Helmet>
                <title>Разбор гардероба</title>
            </Helmet>
            <div className={"content"}>
                <div className={"service-wrapper"}>
                    <section className={"service-item service-item__grid"}>
                        <div className="service-item__content">
                            <h1 className={"service-item__title h1"}>Разбор гардероба</h1>
                            <div className="service-item__description grid2">
                                <div className="service-item__description-container">
                                    <p className={"h4"}>Разберем ваш гардероб, освободим пространство и оставим подходящие и актуальные вещи</p>
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
                        <h2 className={"title h2"}>Что входит в разбор</h2>
                        <ul className={"section__list"}>
                            <li className={"section__list__item body1"}>
                                Консультация по цветам, фасонам, сочетаниям и ответы на любые вопросы
                            </li>
                            <li className={"section__list__item body1"}>
                                Ревизия всех вещей по сезонам (зима или лето), делим вещи на две категории: Подходящие для капсулы и те, которые лучше из гардероба убрать
                            </li>
                            <li className={"section__list__item body1"}>
                                Составляем шоппинг-лист из недостающих вещей (на любую сумму по вашему выбору) вы можете приобрести их самостоятельно, либо со мной на шоппинг-сопровождении
                            </li>
                            <li className={"section__list__item body1"}>
                                Фото всех образов на вас (оффлайн) либо составление капсулы в виде Google документа (онлайн или оффлайн)
                            </li>
                            <li className={"section__list__item body1"}>
                                Грамотная организация хранения вещей
                            </li>
                            <li className={"section__list__item body1"}>
                                Обратная связь от меня по вопросам стиля в течение месяца
                            </li>
                        </ul>
                    </div>
                </section>
                <section className={"service-price container"}>
                    <h4 className={"service-price__title"}>Стоимость:</h4>
                    <div className="service-price__options">
                        <div className="service-price__option">
                            <h3 className={"service-price__option__price"}>15.000 ₽</h3>
                            <span className={"service-price__option__type"}>(оффлайн)</span>
                        </div>
                        <div className="service-price__option">
                            <h3 className={"service-price__option__price"}>20.000 ₽</h3>
                            <span className={"service-price__option__type"}>(онлайн)</span>
                        </div>
                    </div>
                </section>
                <section className={"consult beige-bg"}>
                    <section className="inside container grid3">
                        <div className="inside__container">
                            <h2 className={"title h2"}>Консультация по вашему гардеробу</h2>
                            <ul className={"section__list"}>
                                <li className={"section__list__item body1"}>
                                    Созвон на 1,5 часа по видео
                                </li>
                                <li className={"section__list__item body1"}>
                                    Вы можете задавать любые вопросы по вашему гардеробу, фасонам, сочетаниям, цветам и тд
                                </li>
                                <li className={"section__list__item body1"}>
                                    Обратная связь в течение недели (можете присылать свои образы и я буду комментировать и давать советы)
                                </li>
                                <li className={"section__list__item body1"}>
                                    Я не составляю вам шоппинг лист и капсулу в отличие от полного разбора гардероба
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className={"service-price container"}>
                        <h4 className={"service-price__title"}>Стоимость:</h4>
                        <div className="service-price__options">
                            <div className="service-price__option">
                                <h3 className={"service-price__option__price"}>2.900 ₽</h3>
                            </div>
                        </div>
                    </section>
                </section>
                <section id={"payment"} className={"beige-bg"}>
                    <div className={"order order-container order__grid"}>
                        <div className="order-form__main-page-wrapper">
                            <OrderForm servicesList={wardrobeServices}/>
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

export default Wardrobe;