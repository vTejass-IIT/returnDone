import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import puma from '../../assets/puma.jpeg';
// import 'swiper/swiper.scss';
import 'swiper/css';
import styles from './swiper.module.scss';

export default function SwiperCarousel() {
  return (
    <div className={styles.brand_carousel}>
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            centeredSlides={true}
            //   initialSlide ={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                // reverseDirection: false,
            }}
            loop={true}
            modules={[Autoplay]}
            >
            <SwiperSlide>
                <img src={puma}></img>
            </SwiperSlide>
            <SwiperSlide>
                <img src={puma}></img>
            </SwiperSlide>
            <SwiperSlide>
                <img src={puma}></img>
            </SwiperSlide>
            <SwiperSlide>
                <img src={puma}></img>
            </SwiperSlide>
            <SwiperSlide>
                <img src={puma}></img>
            </SwiperSlide>
            <SwiperSlide>
                <img src={puma}></img>
            </SwiperSlide>
            <SwiperSlide>
                <img src={puma}></img>
            </SwiperSlide>
            <SwiperSlide>
                <img src={puma}></img>
            </SwiperSlide>
            <SwiperSlide>
                <img src={puma}></img>
            </SwiperSlide>
            <SwiperSlide>
                <img src={puma}></img>
            </SwiperSlide>
            </Swiper>
    </div>
    
  )
}
