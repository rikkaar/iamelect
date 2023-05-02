import React from 'react';
import OrderForm from "../components/OrderForm.jsx";
import QnaList from "../components/QnaList.jsx";
import {qnaGeneral} from "../consts/qnaConst.jsx";
import Carousel from "../components/Carousel.jsx";
import AnimatedPage from "../components/AnimatedPage.jsx";
import pic1 from "@assets/feet.jpg"
import pic2 from "@assets/glass.jpg"
import { Helmet } from 'react-helmet';

const PhotoShoot = () => {
    return (
        <AnimatedPage>
            <Helmet>
                <title>Стилизация фотосессии</title>
            </Helmet>
            <div id={"content"} className={"content"}>
                <div className={"service-wrapper"}>
                    <section className={"service-item service-item__grid"}>
                        <div className="service-item__content">
                            <h1 className={"service-item__title h1"}>Стилизация фотосессии</h1>
                            <div className="service-item__description grid2">
                            </div>
                        </div>
                        <div
                            className={"service-item__img"}
                            style={{backgroundImage: `url(${pic1})`}}>
                        </div>
                    </section>
                </div>
                <section className={"program container"}>
                    <h2 className={"title h2 program__title"}>Этапы работы</h2>
                    <div className="program__item">
                        <div className="program__step">
                            /01
                        </div>
                        <div className="body1 program__item__info">
                            В начале обсудим детали съемки, пожелания по образу, стилистике и другим моментам.
                        </div>
                    </div>
                    <div className="program__item">
                        <div className="program__step">
                            /02
                        </div>
                        <div className="body1 program__item__info">
                            Я подготавливаю референсы (примеры будущих образов), мы вместе их обсуждаем и вносим правки, если нужно.
                        </div>
                    </div>
                    <div className="program__item">
                        <div className="program__step">
                            /03
                        </div>
                        <div className="body1 program__item__info">
                            Подготовка образов. Для каждого они создаются индивидуально, под ключ, включая одежду, обувь и аксессуары.
                        </div>
                    </div>
                    <div className="program__item">
                        <div className="program__step">
                            /04
                        </div>
                        <div className="body1 program__item__info">
                            Привезу на съемку готовые образы и помогу на съемке со стилизацией и подготовкой образов
                        </div>
                    </div>
                    <div className="program__item">
                        <div className="program__step">
                            /05
                        </div>
                        <div className="body1 program__item__info">
                            Есть возможность выкупа вещей
                        </div>
                    </div>
                    <div className="program__item">
                        <div className="program__step">
                            /06
                        </div>
                        <div className="body1 program__item__info">
                            Могу помочь с поиском фотографа, визажиста и стилиста по волосам, которые окажут вам качественную услугу.
                        </div>
                    </div>
                    <span className={"program__post-scriptum body1"}>*  Визажист, стилист по волосам, фотограф и аренда студии оплачиваются отдельно</span>
                </section>
                <section className={"service-price container"}>
                    <h4 className={"service-price__title"}>Стоимость:</h4>
                    <div className="service-price__options">
                        <div className="service-price__option">
                            <h3 className={"service-price__option__price"}>3.000 ₽</h3>
                            <span className={"service-price__option__type"}>(за образ)</span>
                        </div>
                    </div>
                    {/*<span className={"service-price__option__type service-price__ps"}>предоплата 50%</span>*/}
                </section>
                <section id={"payment"} className={"beige-bg"}>
                    <div className={"order order-container order__grid"}>
                        <div className="order-form__main-page-wrapper">
                            <OrderForm serviceId={7}/>
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

export default PhotoShoot;