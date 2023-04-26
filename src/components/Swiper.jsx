import React from 'react';
import TouchCarousel, {clamp} from 'react-touch-carousel'
import pic1 from "../assets/BabyWatchin.jpg";
import pic2 from "../assets/IMG_1470.JPG";
import pic3 from "../assets/IMG_1138.JPG";
import pic4 from "../assets/IMG_7657.JPG";
import pic5 from "../assets/IMG_1689.JPG";
import pic6 from "../assets/IMG_9638.JPG";
import NonPassiveTouchTarget from "./NonPassiveTouchTarget.jsx";
import touchWithMouseHOC from 'react-touch-carousel/lib/touchWithMouseHOC'
const listOfData = [
    <div className="services__card"
         style={{backgroundImage: `url(${pic1})`}}>
        <div className="darken-layer">
            <h3 className={"services__title"}>Стильный малыш</h3>
            <div className={"services__button"}>
                <button className={"btn-blur"}>Подробнее</button>
            </div>
        </div>
    </div>,
    <div className="services__card"
         style={{backgroundImage: `url(${pic2})`}}>
        <div className="darken-layer">
            <h3 className={"services__title"}>Клуб преображения</h3>
            <div className={"services__button"}>
                <button className={"btn-blur"}>Подробнее</button>
            </div>
        </div>
    </div>,
    <div className="services__card"
         style={{backgroundImage: `url(${pic3})`}}>
        <div className="darken-layer">
            <h3 className={"services__title"}>Разбор гардероба</h3>
            <div className={"services__button"}>
                <button className={"btn-blur"}>Подробнее</button>
            </div>
        </div>
    </div>,
    <div className="services__card"
         style={{backgroundImage: `url(${pic4})`}}>
        <div className="darken-layer">
            <h3 className={"services__title"}>Шоппинг-сопровождение</h3>
            <div className={"services__button"}>
                <button className={"btn-blur"}>Подробнее</button>
            </div>
        </div>
    </div>,
    <div className="services__card"
         style={{backgroundImage: `url(${pic5})`}}>
        <div className="darken-layer">
            <h3 className={"services__title"}>Наставничество</h3>
            <div className={"services__button"}>
                <button className={"btn-blur"}>Подробнее</button>
            </div>
        </div>
    </div>,
    <div className="services__card"
         style={{backgroundImage: `url(${pic6})`}}>
        <div className="darken-layer">
            <h3 className={"services__title"}>стилизация фотосессии</h3>
            <div className={"services__button"}>
                <button className={"btn-blur"}>Подробнее</button>
            </div>
        </div>
    </div>,
]

const query = window.location.search.slice(1)
const enableLoop = /\bloop\b/.test(query)
const enableAutoplay = /\bautoplay\b/.test(query)

const cardSize = 300
const cardPadCount = enableLoop ? 3 : 0
const carouselWidth = clamp(window.innerWidth, 0, 960)

function renderCard (index, modIndex, cursor) {
    const item = listOfData[modIndex]
        return (
            item
        )
}

function CarouselContainer (props) {
    const { cursor, carouselState: { active, dragging }, ...rest } = props
    let current = -Math.round(cursor) % listOfData.length
    while (current < 0) {
        current += listOfData.length
    }
    // Put current card at center
    const translateX = (cursor - cardPadCount) * cardSize + (carouselWidth - cardSize) / 2
    return (
        <NonPassiveTouchTarget
            className={
                'carousel-container'
            }
        >
            <NonPassiveTouchTarget
                className='carousel-track'
                style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
                {...rest}
            />
        </NonPassiveTouchTarget>
    )
}

const Container = touchWithMouseHOC(CarouselContainer)

const Swiper = () => {
    return (
        <TouchCarousel
            component={Container}
            cardSize={cardSize}
            cardCount={listOfData.length}
            loop={false}
            autoplay={false}
            renderCard={renderCard}
        />
    )
};

export default Swiper;