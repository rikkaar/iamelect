import pic1 from "../assets/BabyWatchin.jpg";
import pic2 from "../assets/IMG_1470.JPG";
import pic3 from "../assets/whiteasd.jpg";
import pic4 from "../assets/glass.jpg";
import pic5 from "../assets/IMG_1689.JPG";
import pic6 from "../assets/feet.jpg";
import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

export const ServiceCards = [
    <div className="services__card"
         style={{backgroundImage: `url(${pic1})`}}>
        <div className="darken-layer">
            <h3 className={"services__title h3"}>Стильный малыш</h3>
            <div className={"services__button"}>
                <Link to={"/service/babystyle/#"} className={"btn-blur btn-font services__btn"}>Подробнее
                </Link>
            </div>
        </div>
    </div>,
    <div className="services__card"
         style={{backgroundImage: `url(${pic2})`}}>
        <div className="darken-layer">
            <h3 className={"services__title h3"}>Клуб преображения</h3>
            <div className={"services__button"}>
                <Link to={"/service/transformation/#"} className={"btn-blur btn-font services__btn"}>Подробнее
                </Link>
            </div>
        </div>
    </div>,
    <div className="services__card"
         style={{backgroundImage: `url(${pic3})`}}>
        <div className="darken-layer">
            <h3 className={"services__title h3"}>Разбор гардероба</h3>
            <div className={"services__button"}>
                <Link to={"/service/wardrobe/#"} className={"btn-blur btn-font services__btn"}>Подробнее
                </Link>
            </div>
        </div>
    </div>,
    <div className="services__card"
         style={{backgroundImage: `url(${pic4})`}}>
        <div className="darken-layer">
            <h3 className={"services__title h3"}>Шоппинг-сопровождение</h3>
            <div className={"services__button"}>
                <Link to={"/service/shopAssistance/#"} className={"btn-blur btn-font services__btn"}>Подробнее
                </Link>
            </div>
        </div>
    </div>,
    <div className="services__card"
         style={{backgroundImage: `url(${pic5})`}}>
        <div className="darken-layer">
            <h3 className={"services__title h3"}>Наставничество</h3>
            <div className={"services__button"}>
                <Link to={"/service/mentoring/#"} className={"btn-blur btn-font services__btn"}>Подробнее
                </Link>
            </div>
        </div>
    </div>,
    <div className="services__card"
         style={{backgroundImage: `url(${pic6})`}}>
        <div className="darken-layer">
            <h3 className={"services__title h3"}>стилизация фотосессии</h3>
            <div className={"services__button"}>
                <Link to={"/service/photoshoot/#"} className={"btn-blur btn-font services__btn"}>Подробнее
                </Link>
            </div>
        </div>
    </div>
]