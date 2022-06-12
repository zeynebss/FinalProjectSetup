import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar,Autoplay, A11y } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import sliderImage1 from '../../assets/sliderImage1.jpg'
import sliderImage2 from '../../assets/sliderImage2.jpg'
import sliderImage3 from '../../assets/sliderImage3.jpg'
import './slider.scss';





const Slider = () => {
  return (
    <div className="slider-area">
         <Swiper  className="homeSwiper"
    modules={[Navigation, Pagination, Scrollbar,Autoplay, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true  }}
      autoplay={{delay:7000}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
   <div style={{backgroundImage:`url(${sliderImage1})`}} className="homeSlider">
 <div className="container">
 <div className="slider-text-area col-lg-5">
       <h6>Essenstial Items</h6>
       <h2>Beauty Inspired by Real Life</h2>
       <div className="slider-desc">
           <p>Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
       </div>
       <div className="slider-button">
           <button>Shop Now</button>
       </div>
   </div>
 </div>
   </div>
      </SwiperSlide>
      <SwiperSlide>   
    <div style={{backgroundImage:`url(${sliderImage2})`}} className="homeSlider">
    <div className="container">
 <div className="slider-text-area col-lg-5">
       <h6>Essenstial Items</h6>
       <h3>Get The Perfectly Hydrated Skin</h3>
       <div className="slider-desc">
           <p>Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
       </div>
       <div className="slider-button">
           <button>Shop Now</button>
       </div>
   </div>
 </div>
   </div>
   </SwiperSlide>
      <SwiperSlide>   
    <div style={{backgroundImage:`url(${sliderImage3})`}} className="homeSlider">
    <div className="container">
 <div className="slider-text-area col-lg-5">
       <h6>GET THE GLOW</h6>
       <h2>Be Your Kind of Beauty</h2>
       <div className="slider-desc">
           <p>Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
       </div>
       <div className="slider-button">
           <button>Shop Now</button>
       </div>
   </div>
 </div>
   </div>
   </SwiperSlide>


    </Swiper>
    </div>
  )
}

export default Slider