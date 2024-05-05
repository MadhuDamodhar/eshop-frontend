import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import carouselItem1 from '../Home/product-animated.gif'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Carousel.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {
  
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
       
      
        modules={[Autoplay]}
        className="mySwiper"
      >
        
        <SwiperSlide><img src={carouselItem1}></img></SwiperSlide>
        <SwiperSlide><img src={carouselItem1}></img></SwiperSlide>
        <SwiperSlide><img src={carouselItem1}></img></SwiperSlide>
        <SwiperSlide><img src={carouselItem1}></img></SwiperSlide>
        <SwiperSlide><img src={carouselItem1}></img></SwiperSlide>
        <SwiperSlide><img src={carouselItem1}></img></SwiperSlide>
        <SwiperSlide><img src={carouselItem1}></img></SwiperSlide>
        <SwiperSlide><img src={carouselItem1}></img> </SwiperSlide>

      </Swiper>
    </>
  );
}
