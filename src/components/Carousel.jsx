import React, {useEffect, useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { register } from "swiper/element/bundle";
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import pic1 from "../assets/BabyWatchin.jpg";
import pic2 from "../assets/IMG_1470.JPG";
import pic3 from "../assets/IMG_1138.JPG";
import pic4 from "../assets/IMG_7657.JPG";
import pic5 from "../assets/IMG_1689.JPG";
import pic6 from "../assets/IMG_9638.JPG";
import {ServiceCards} from "./ServiceCards.jsx";
import Qna from "./Qna.jsx";

const listOfData = ServiceCards


register()
const Carousel = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperContainer = swiperRef.current;
        const params = {
            navigation: true,
            slidesPerView: 3,
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
    }, []);

    return (
        <section className={"carousel container"}>
            <h2 className={"title h2 carousel__title"}>Мои услуги</h2>
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