import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar,Autoplay, A11y } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './product-featured.scss'
import product1 from '../../assets/product1.jpg'
import product2 from '../../assets/product2.jpg'
import product3 from '../../assets/product3.jpg'
import product4 from '../../assets/product4.jpg'
import product11 from '../../assets/product11.jpg'
import product22 from '../../assets/product22.jpg'
import product33 from '../../assets/product33.jpg'
import product44 from '../../assets/product44.jpg'
import { Link } from 'react-router-dom';
import {IoMdStar} from 'react-icons/io'
import {FiShoppingBag,FiEye} from 'react-icons/fi'
import {AiOutlineStar} from 'react-icons/ai'
import {MdOutlineCompareArrows} from 'react-icons/md'


const ProductFeatured = () => {
  return (
    <>
    <div className="product-featured-text-h text-center ">
   <h2>Our Featured Products</h2>
   <p>Get the skin you want to feel</p>
    </div>
        <Swiper  
    modules={[Navigation, Pagination, Scrollbar,Autoplay, A11y]}
      spaceBetween={20}
      slidesPerView={4}
      pagination={{ clickable: true  }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}

    >
 <SwiperSlide>

    <div className="container">
 <div className="product-f-box ">
      <img className="first" src={product1}  alt="" /> 
      <img className="second" src={product11} alt="" />
      <div className="discount">
        <p>-17%</p>
      </div>
     <div className="hover-icons">
       <ul className="list-unstyled">
         <li> <i><FiShoppingBag/></i></li>
         <li><i><FiEye/></i></li>
         <li><i><AiOutlineStar/></i></li>
         <li><i><MdOutlineCompareArrows/></i></li>
       </ul>
     </div>

      <div className="price-area text-center">
        <p>$10.00-$20.00</p>
        <Link to='/'>Shield Conditioner</Link>
        <div className="rating-icons">
          <i><IoMdStar/></i>
          <i><IoMdStar/></i>
          <i><IoMdStar/></i>
          <i><IoMdStar/></i>
         <i><IoMdStar/></i>
        </div>
      </div>
      
    
   </div>
 </div>
  
 </SwiperSlide>
<SwiperSlide>

<div className="container">
<div className="product-f-box ">
      <img className="first" src={product2}  alt="" /> 
      <img className="second" src={product22} alt="" />
 
      <div className="hover-icons">
       <ul className="list-unstyled">
         <li> <i><FiShoppingBag/></i></li>
         <li><i><FiEye/></i></li>
         <li><i><AiOutlineStar/></i></li>
         <li><i><MdOutlineCompareArrows/></i></li>
       </ul>
     </div>
      <div className="price-area text-center">
        <p>$10.00-$20.00</p>
        <Link to='/'>Shield Conditioner</Link>
        <div className="rating-icons">
          <i><IoMdStar/></i>
          <i><IoMdStar/></i>
          <i><IoMdStar/></i>
          <i><IoMdStar/></i>
         <i><IoMdStar/></i>
        </div>
      </div>
      
    
   </div>
</div>

  </SwiperSlide>
  <SwiperSlide>

<div className="container">
<div className="product-f-box ">
      <img className="first" src={product3}  alt="" /> 
      <img className="second" src={product33} alt="" />
      <div className="discount">
        <p>-8%</p>
      </div>
      <div className="hover-icons">
       <ul className="list-unstyled">
         <li> <i><FiShoppingBag/></i></li>
         <li><i><FiEye/></i></li>
         <li><i><AiOutlineStar/></i></li>
         <li><i><MdOutlineCompareArrows/></i></li>
       </ul>
     </div>
      <div className="price-area text-center">
        <p>$10.00-$20.00</p>
        <Link to='/'>Shield Conditioner</Link>
        <div className="rating-icons">
          <i><IoMdStar/></i>
          <i><IoMdStar/></i>
          <i><IoMdStar/></i>
          <i><IoMdStar/></i>
         <i><IoMdStar/></i>
        </div>
      </div>
      
    
   </div>
</div>

  </SwiperSlide>
  <SwiperSlide>

<div className="container">
<div className="product-f-box ">
      <img className="first" src={product4}  alt="" /> 
      <img className="second" src={product44} alt="" />
 
      <div className="hover-icons">
       <ul className="list-unstyled">
         <li> <i><FiShoppingBag/></i></li>
         <li><i><FiEye/></i></li>
         <li><i><AiOutlineStar/></i></li>
         <li><i><MdOutlineCompareArrows/></i></li>
       </ul>
     </div>
      <div className="price-area text-center">
        <p>$10.00-$20.00</p>
        <Link to='/'>Shield Conditioner</Link>
        <div className="rating-icons">
          <i><IoMdStar/></i>
          <i><IoMdStar/></i>
          <i><IoMdStar/></i>
          <i><IoMdStar/></i>
         <i><IoMdStar/></i>
        </div>
      </div>
      
    
   </div>
</div>

  </SwiperSlide>
  <SwiperSlide>

<div className="container">
<div className="product-f-box ">
      <img className="first" src={product3}  alt="" /> 
      <img className="second" src={product33} alt="" />
      <div className="discount">
        <p>-17%</p>
      </div>
      <div className="price-area text-center">
        <p>$10.00-$20.00</p>
        <Link to='/'>Shield Conditioner</Link>
        <div className="rating-icons">
          <i><IoMdStar/></i>
          <i><IoMdStar/></i>
          <i><IoMdStar/></i>
          <i><IoMdStar/></i>
         <i><IoMdStar/></i>
        </div>
      </div>
      
    
   </div>
</div>

  </SwiperSlide>
  <SwiperSlide>

<div className="container">
<div className="product-f-box ">
      <img className="first" src={product4}  alt="" /> 
      <img className="second" src={product44} alt="" />
      <div className="discount">
        <p>-17%</p>
      </div>
      <div className="price-area text-center">
        <p>$10.00-$20.00</p>
        <Link to='/'>Shield Conditioner</Link>
        <div className="rating-icons">
          <i><IoMdStar/></i>
          <i><IoMdStar/></i>
          <i><IoMdStar/></i>
          <i><IoMdStar/></i>
         <i><IoMdStar/></i>
        </div>
      </div>
      
    
   </div>
</div>

  </SwiperSlide>

  
    


    </Swiper>
    </>
  )
}

export default ProductFeatured