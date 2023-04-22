import React from 'react';
import {Link} from "react-router-dom";
import aboutPicture from "../assets/IMG_1182.JPG"
import pic1 from "../assets/BabyWatchin.jpg"
import pic2 from "../assets/IMG_1470.JPG"
import pic3 from "../assets/IMG_1138.JPG"
import pic5 from "../assets/IMG_1689.JPG"
import pic4 from "../assets/IMG_7657.JPG"
import pic6 from "../assets/IMG_9638.JPG"
import picPayment from "../assets/IMG_9586.JPG"
import OrderForm from "../components/OrderForm.jsx";
import {qnaGeneral} from "../consts/qnaConst.jsx";
import QnaList from "../components/QnaList.jsx";




const Main = () => {
    return (
        <div className={"content"}>
            <section className={"welcome container"}>
                <div>
                    <h1 className={"welcome__title"}>Азарян Екатерина</h1>
                    <p className={"welcome__subtitle subtitle"}>Персональный стилист</p>
                </div>
                <div className={"grid3 welcome__grid"}>
                    <button className={"btn-plain welcome__btn"}>Перейти к услугам</button>
                </div>
            </section>
            <section className={"about container section__grid"}>
                <div className={"about__content section"}>
                    <h2 className={"title"}>Обо мне</h2>
                    <ul className={"section__list"}>
                        <li className={"section__list__item"}>
                            Мне всегда была интересна тема стиля. Я обращала внимание на красиво одетых девушек, но не
                            понимала как именно я могу повторить их образы.
                        </li>
                        <li className={"section__list__item"}>
                            В 2019 году я прошла свое первое обучение и влюбилась в эту профессию. Теперь после
                            нескольких курсов и нескольких лет практики я с уверенностью умею подбирать образы не только
                            для себя, но и для людей любого пола и возраста.
                        </li>
                        <li className={"section__list__item"}>
                            Моя главная цель - сделать удобный гардероб, донести вам информацию так, чтобы вы и сами
                            научились составлять капсулы и подбирать образы под любое событие.
                        </li>
                        <li className={"section__list__item"}>
                            Работаю с масс маркетом и люкс сегментом
                        </li>
                        <li className={"section__list__item"}>
                            У меня за спиной обучения в различных школах стиля. Я проанализировала все подходы и вывела
                            самые лучшие и работающие, которые помогли десяткам девушек найти уверенность и раскрыть
                            свою красоту.
                        </li>
                    </ul>
                </div>
                <img className={"section__img"} src={aboutPicture} alt="Мое фото в шляпе"/>
            </section>
            <section className={"services container"}>
                <h2 className={"title"}>Мои услуги</h2>
                <div className={"services__content grid3"}>
                    <div className="services__card"
                         style={{backgroundImage: `url(${pic1})`}}>
                         <div className="darken-layer">
                             <h3 className={"services__title"}>Стильный малыш</h3>
                             <div className={"services__button"}>
                                 <button className={"btn-blur"}>Подробнее</button>
                             </div>
                         </div>
                    </div>
                    <div className="services__card"
                         style={{backgroundImage: `url(${pic2})`}}>
                        <div className="darken-layer">
                            <h3 className={"services__title"}>Клуб преображения</h3>
                            <div className={"services__button"}>
                                <button className={"btn-blur"}>Подробнее</button>
                            </div>
                        </div>
                    </div>
                    <div className="services__card"
                        style={{backgroundImage: `url(${pic3})`}}>
                        <div className="darken-layer">
                            <h3 className={"services__title"}>Разбор гардероба</h3>
                            <div className={"services__button"}>
                                <button className={"btn-blur"}>Подробнее</button>
                            </div>
                        </div>
                    </div>
                    <div className="services__card"
                        style={{backgroundImage: `url(${pic4})`}}>
                        <div className="darken-layer">
                            <h3 className={"services__title"}>Шоппинг-сопровождение</h3>
                            <div className={"services__button"}>
                                <button className={"btn-blur"}>Подробнее</button>
                            </div>
                        </div>
                    </div>
                    <div className="services__card"
                         style={{backgroundImage: `url(${pic5})`}}>
                         <div className="darken-layer">
                             <h3 className={"services__title"}>Наставничество</h3>
                             <div className={"services__button"}>
                                 <button className={"btn-blur"}>Подробнее</button>
                             </div>
                         </div>
                    </div>
                    <div className="services__card"
                        style={{backgroundImage: `url(${pic6})`}}>
                        <div className="darken-layer">
                            <h3 className={"services__title"}>стилизация фотосессии</h3>
                            <div className={"services__button"}>
                                <button className={"btn-blur"}>Подробнее</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={"beige-bg"}>
                <div className={"order order-container order__grid"}>
                    <div className="order-form__main-page-wrapper">
                        <OrderForm/>
                    </div>
                    <img className={"order__pic"} src={picPayment} alt="Фото с цветами"/>
                </div>
            </section>
            <QnaList qnaList={qnaGeneral}/>
        </div>
    );
};

export default Main;