import React from 'react';
import OrderForm from "../components/OrderForm.jsx";
import {qnaGeneral} from "../consts/qnaConst.jsx";
import QnaList from "../components/QnaList.jsx";
import {ServiceCards} from "../components/ServiceCards.jsx";
import Carousel from "../components/Carousel.jsx";
import AnimatedPage from "../components/AnimatedPage.jsx";
import { Link as Scroll} from 'react-scroll'
import pic1 from "../assets/IMG_1182.jpg"
import pic2 from "../assets/glass.jpg"

const Main = () => {
    return (
        <AnimatedPage>
            <div className={"content"}>
                <section className={"welcome container"}>
                    <div>
                        <h1 className={"welcome__title"}>Азарян Екатерина</h1>
                        <p className={"welcome__subtitle h4"}>Персональный стилист</p>
                    </div>
                    <div className={"grid3 welcome__grid"}>
                        <Scroll spy={true} smooth={true} offset={50} duration={1000} to={"services"} className={"btn-plain welcome__btn btn-font"}>Перейти к услугам</Scroll>
                    </div>
                </section>
                <section className={"about section__grid"}>
                    <h2 className={"title h2 about__title"}>Обо мне</h2>
                    <div
                        className={"section__img"}
                        style={{backgroundImage: `url(${pic1})`}}>
                    </div>
                    <div className={"about__content section"}>
                        <ul className={"section__list"}>
                            <li className={"section__list__item body1"}>
                                Мне всегда была интересна тема стиля. Я обращала внимание на красиво одетых девушек, но не
                                понимала как именно я могу повторить их образы.
                            </li>
                            <li className={"section__list__item body1"}>
                                В 2019 году я прошла свое первое обучение и влюбилась в эту профессию. Теперь после
                                нескольких курсов и нескольких лет практики я с уверенностью умею подбирать образы не только
                                для себя, но и для людей любого пола и возраста.
                            </li>
                            <li className={"section__list__item body1"}>
                                Моя главная цель - сделать удобный гардероб, донести вам информацию так, чтобы вы и сами
                                научились составлять капсулы и подбирать образы под любое событие.
                            </li>
                            <li className={"section__list__item body1"}>
                                Работаю с масс маркетом и люкс сегментом
                            </li>
                            <li className={"section__list__item body1"}>
                                У меня за спиной обучения в различных школах стиля. Я проанализировала все подходы и вывела
                                самые лучшие и работающие, которые помогли десяткам девушек найти уверенность и раскрыть
                                свою красоту.
                            </li>
                        </ul>
                    </div>

                </section>
                <section id={"services"} className={"services container"}>
                    <h2 className={"title h2"}>Мои услуги</h2>
                    <div className={"services__content services__grid"}>
                        {ServiceCards.map((card, index) => {
                            return (<div key={index}>{card}</div>)
                        })}
                    </div>
                </section>
                <div className={"main__carousel"}>
                    <Carousel/>
                </div>
                <section id={"payment"} className={"beige-bg"}>
                    <div className={"order order-container order__grid"}>
                        <div className="order-form__main-page-wrapper">
                            <OrderForm/>
                        </div>
                        <div className="order__pict"
                             style={{backgroundImage: `url(${pic2})`}}>
                        </div>
                    </div>
                </section>
                <QnaList qnaList={qnaGeneral}/>
            </div>
        </AnimatedPage>
    );
};

export default Main;