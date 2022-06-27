import React,{useEffect, useState} from 'react'
import './pdetails.scss'
import product1 from '../../assets/product1.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import product2 from '../../assets/product2.jpg'
import product3 from '../../assets/product3.jpg'
import product4 from '../../assets/product4.jpg'
import product11 from '../../assets/product11.jpg'
import product22 from '../../assets/product22.jpg'
import product33 from '../../assets/product33.jpg'
import product44 from '../../assets/product44.jpg'

import { FreeMode, Navigation, Thumbs,Lazy,Controller,Pagination } from "swiper";
const PDetails = () => {
    const [swiper, updateSwiper] = useState(null);
    // Swiper thumbsinstance
    const [swiperThumbs, updateSwiperThumbs] = useState(null);
    let params = {
        modules: [Controller, Pagination, Navigation, Lazy],
        preloadImages: false,
        lazy: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        loop: false,
        spaceBetween: 30,
        getSwiper: updateSwiper // Get swiper instance callback
      };
      let thumbsParams = {
        modules: [Controller],
        slideToClickedSlide: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 10,
        getSwiper: updateSwiperThumbs, // Get swiper instance callback
        style: {
          width: "100px"
        }
      };
      // Bind swiper and swiper thumbs
  useEffect(() => {
    if (swiper && swiperThumbs) {
      swiper.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiper;
    }
  }, [swiper, swiperThumbs]);
    return (
   <section className="productDetails">
    <div className="container">
        <div className="row justify-content-between align-items-cezzzzzer">
          <div className="col-lg-4">
            <div className="pdetails-img">
            <Swiper
            {...params}
        className="mySwiper2"
      >
       
        <SwiperSlide>
          <img src={product1}  alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={product2}  alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={product3}  alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={product4}  alt=''/>
        </SwiperSlide>
      </Swiper>
      <Swiper
         {...thumbsParams}
      >
         <div className=''>
          <img 
            className="swiper-lazy"
          src={product1}  alt='' />
        </div>
        <div >
          <img src={product2}  alt='' />
        </div>
        <div>
          <img src={product3}   alt=''/>
        </div >
        <div >
          <img src={product4}  alt=''/>
        </div >
      </Swiper>
            </div>

          </div>
          <div className="col-lg-8">
            <div className="pdetailsdesc">

            </div>
          </div>
        </div>
    </div>
   </section>
  )
}
 

export default PDetails