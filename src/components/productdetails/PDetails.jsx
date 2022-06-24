import React,{useState} from 'react'
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

import { FreeMode, Navigation, Thumbs } from "swiper";
const PDetails = () => {
    // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  return (
   <section className="productDetails">
    <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-4">
            <div className="pdetails-img">
            <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        // thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
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
        // onSwiper={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
         <SwiperSlide>
          <img src={product1} style={{width:"70px",height:"80px"}} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={product2} style={{width:"70px",height:"80px"}} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={product3} style={{width:"70px",height:"80px"}}  alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={product4} style={{width:"70px",height:"80px"}}  alt=''/>
        </SwiperSlide>
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