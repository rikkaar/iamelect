import React from 'react';
import OrderForm from "../components/OrderForm.jsx";
import QnaList from "../components/QnaList.jsx";
import {qnaGeneral} from "../consts/qnaConst.jsx";
import Carousel from "../components/Carousel.jsx";

const Wardrobe = () => {
    return (
        <div className={"content"}>
            <section className={"service-item container service-item__grid"}>
                <div className="service-item__content">
                    <h1 className={"service-item__title h1"}>Клуб преображения</h1>
                    <div className="service-item__description grid2">
                        <div className="service-item__description-container">
                            <p className={"h4"}>Разберем ваш гардероб, освободим пространство и оставим подходящие и актуальные вещи</p>
                        </div>
                    </div>
                </div>
                <div
                    className={"service-item__img"}
                    style={{backgroundImage: `url(/src/assets/IMG_1138.JPG)`}}>
                </div>
            </section>
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
            <section className={"beige-bg"}>
                <div className={"order order-container order__grid"}>
                    <div className="order-form__main-page-wrapper">
                        <OrderForm serviceId={2}/>
                    </div>
                    <div className="order__pict"
                         style={{backgroundImage: `url(/src/assets/IMG_1138.JPG)`}}>
                    </div>
                </div>
            </section>
            <QnaList qnaList={qnaGeneral}/>
<Carousel/>
        </div>
    );
};

export default Wardrobe;