import React from 'react';
import OrderForm from "../components/OrderForm.jsx";
import QnaList from "../components/QnaList.jsx";
import {qnaGeneral} from "../consts/qnaConst.jsx";
import Carousel from "../components/Carousel.jsx";

const ShopAssistance = () => {
    return (
        <div className={"content"}>
            <section className={"service-item container service-item__grid"}>
                <div className="service-item__content">
                    <h1 className={"service-item__title h1"}>Шоппинг-сопровождение</h1>
                    <div className="service-item__description grid2">
                        <div className="service-item__description-container">
                            <p className={"h4"}>Составим функциональный гардероб, отвечающий всем вашим запросам</p>
                        </div>
                    </div>
                </div>
                <div
                    className={"service-item__img"}
                    style={{backgroundImage: `url(/src/assets/IMG_7657.JPG)`}}>
                </div>
            </section>
            <section className="inside container grid3">
                <div className="inside__container">
                    <h2 className={"title h2"}>Что входит в шоппинг-сопровождение</h2>
                    <ul className={"section__list"}>
                        <li className={"section__list__item body1"}>
                            Онлайн созвон, где мы обсудим цели, бюджет и другие вопросы касающиеся сотрудничества
                        </li>
                        <li className={"section__list__item body1"}>
                            Оправляю вам примерный шоппинг лист, чтобы вы сразу знали чего ожидать и могли внести корректировки
                        </li>
                        <li className={"section__list__item body1"}>
                            Прешоппинг. Чтобы сэкономить ваше время и приезжаю в магазин заранее и нахожу и подготавливаю все нужные вещи в примерочных
                        </li>
                        <li className={"section__list__item body1"}>
                            Примеряем вещи и выбираем наиболее подходящие
                        </li>
                        <li className={"section__list__item body1"}>
                            Ответы на любые вопросы, касательно стиля в течение месяца
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
                        <h3 className={"service-price__option__price"}>25.000 ₽</h3>
                        <span className={"service-price__option__type"}>(онлайн)</span>
                    </div>
                </div>
            </section>
            <section className={"beige-bg"}>
                <div className={"order order-container order__grid"}>
                    <div className="order-form__main-page-wrapper">
                        <OrderForm serviceId={3}/>
                    </div>
                    <div className="order__pict"
                         style={{backgroundImage: `url(/src/assets/IMG_7657.JPG)`}}>
                    </div>
                </div>
            </section>
            <QnaList qnaList={qnaGeneral}/>
<Carousel/>
        </div>
    );
};

export default ShopAssistance;