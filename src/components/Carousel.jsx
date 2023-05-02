import React, {useEffect, useRef, useState} from 'react';
import { register } from "swiper/element/bundle";
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {ServiceCards} from "./ServiceCards.jsx";

const listOfData = ServiceCards


register()
const Carousel = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }

    const [slides, setSlides] = useState(1)
    useEffect(() => {
        setSlides(windowSize.innerWidth > 768 ? 3 : windowSize.innerWidth < 600 ? 1 : 2)
    }, [windowSize])


    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperContainer = swiperRef.current;
        const params = {
            freeMode: (slides <= 3),
            navigation: (slides !== 1),
            pagination: true,
            slidesPerView: slides === 1 ? "auto" : slides,
            spaceBetween: 20,
            injectStyles: [`

            .swiper-button-next,
            .swiper-button-prev {
              background-position: center;
              background-size: 40px;
              background-repeat: no-repeat;
              width: 40px;
              height: 40px;
            }
            .swiper-pagination-bullet-active {
                background-color: #DCD6C8 !important;
            }
            
    
            .swiper-button-prev {
              background-image: url("/src/assets/icons/arrowright.svg");
              rotate: 180deg;
            }
    
            .swiper-button-next {
              background-image: url("/src/assets/icons/arrowright.svg");
            }
    
            .swiper-button-next::after,
            .swiper-button-prev::after {
              content: "";
            } `,
              ],
        };
        Object.assign(swiperContainer, params);
        swiperContainer.initialize();
    }, [slides]);

    return (
        <section className={"carousel container"}>
            <h2 id={"services"} className={"title h2 carousel__title"}>Мои услуги</h2>
            <swiper-container ref={swiperRef} init="false">
                    {listOfData.map(((slide, index) => {
                        return (
                            <swiper-slide key={index}>{slide}</swiper-slide>
                        )
                    }))}
                 </swiper-container>
        </section>



    )
};

export default Carousel;