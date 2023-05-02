import React from 'react';
import OrderForm from "../components/OrderForm.jsx";
import QnaList from "../components/QnaList.jsx";
import {qnaGeneral} from "../consts/qnaConst.jsx";
import Carousel from "../components/Carousel.jsx";
import AnimatedPage from "../components/AnimatedPage.jsx";
import pic1 from "@assets/IMG_1470.jpg"
import pic2 from "@assets/glass.jpg"
import { Helmet } from 'react-helmet';

const Transformation = () => {
    return (
        <AnimatedPage>
            <Helmet>
                <title>Клуб преображения</title>
            </Helmet>
            <div className={"content"}>
                <div className={"service-wrapper"}>
                    <section className={"service-item service-item__grid"}>
                        <div className="service-item__content">
                            <h1 className={"service-item__title h1"}>Клуб преображения</h1>
                            <div className="service-item__description grid2">
                                <div className="service-item__description-container">
                                    <p className={"h4"}>Изменись внешне и внутренне</p>
                                    <ul className={"service-item__ul"}>
                                        <li className={"service-item__li body1"}>
                                            Разбираем гардероб
                                        </li>
                                        <li className={"service-item__li body1"}>
                                            Учимся краситься
                                        </li>
                                        <li className={"service-item__li body1"}>
                                            Фототерапия и финальная фотосессия
                                        </li>
                                    </ul>
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
                        <h2 className={"title h2"}>На курсе вы узнаете</h2>
                        <ul className={"section__list"}>
                            <li className={"section__list__item body1"}>
                                В своём стремлении улучшить пользовательский опыт мы упускаем, что тщательные исследования
                                конкурентов в равной
                            </li>
                            <li className={"section__list__item body1"}>
                                Идейные соображения высшего порядка, а также перспективное планирование способствует
                                подготовке и реализации прогресса профессионального сообщества.
                            </li>
                            <li className={"section__list__item body1"}>
                                Принимая во внимание показатели успешности, разбавленное изрядной долей эмпатии,
                                рациональное мышление создаёт необходимость включения в производственный план целого ряда
                                внеочередных мероприятий с учётом комплекса прогресса профессионального сообщества.
                            </li>
                            <li className={"section__list__item body1"}>
                                Однозначно, некоторые особенности внутренней политики набирают популярность среди
                                определенных слоев населения, а значит, должны быть функционально разнесены на независимые
                                элементы.
                            </li>
                        </ul>
                    </div>
                </section>
                <section className={"beige-bg addons"}>
                    <div className={"container addons__grid"}>
                        <h2 className={"addons__title h2"}>А также обсудим</h2>
                        <div className="addons__item">
                            <div className="addons__item__marker"></div>
                            <p className="body1 addons__item__text">Сложно сказать, почему героям были возданы
                                соответствующие почести</p>
                        </div>
                        <div className="addons__item">
                            <div className="addons__item__marker"></div>
                            <p className="body1 addons__item__text">Не следует забывать, что потускнели светлые лики </p>
                        </div>
                        <div className="addons__item">
                            <div className="addons__item__marker"></div>
                            <p className="body1 addons__item__text">Как бы то ни было, неподкупность государственных СМИ
                                сделала своё дело</p>
                        </div>
                    </div>
                </section>
                <section className={"program container"}>
                    <h2 className={"title program__title h2"}>Программа курса</h2>
                    <div className="program__item">
                        <div className="program__step">
                            /01
                        </div>
                        <div className="body1 program__item__info">
                            Подробное описание каждой вещи в вашем гардеробе (Какую выбрать модель, цвет, длину, принт и тд)
                        </div>
                    </div>
                    <div className="program__item">
                        <div className="program__step">
                            /02
                        </div>
                        <div className="body1 program__item__info">
                            Разберем цветовые сочетания, найдем самый простой и беспроигрышный способ сочетать цвета.
                        </div>
                    </div>
                    <div className="program__item">
                        <div className="program__step">
                            /03
                        </div>
                        <div className="body1 program__item__info">
                            Создание капсульного гардероба, где все со всем сочетается.
                        </div>
                    </div>
                    <div className="program__item">
                        <div className="program__step">
                            /04
                        </div>
                        <div className="body1 program__item__info">
                            Вы научитесь выбирать вещи, которые выглядят дорого и стильно за те же деньги, которые вы
                            тратили на одежду раньше.
                        </div>
                    </div>
                </section>
                <section className={"how container"}>
                    <h2 className={"title h2 program__title"}>Как проходит курс</h2>
                    <div className="grid3 how__container">
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
                            {/*<h3 className={"service-price__option__price"}>45.000 ₽</h3>*/}
                            <h3 className={"service-price__option__price"}>Уже скоро...</h3>
                        </div>
                    </div>
                </section>
                <section id={"payment"} className={"beige-bg"}>
                    <div className={"order order-container order__grid"}>
                        <div className="order-form__main-page-wrapper">
                            <OrderForm serviceId={1} preorder={true}/>
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

export default Transformation;