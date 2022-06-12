import React from 'react'
import './fav.scss'
import banner1 from '../../assets/banner1.jpg'
import product1 from '../../assets/product1.jpg'
import product2 from '../../assets/product2.jpg'
import product3 from '../../assets/product3.jpg'
import { Link } from 'react-router-dom'
import {IoMdStar} from 'react-icons/io'
import {FiShoppingBag,FiEye} from 'react-icons/fi'
import {AiOutlineStar} from 'react-icons/ai'
import {MdOutlineCompareArrows} from 'react-icons/md'

const Fav = () => {
  return (
   <div className="customer-fav-area">
       <div className="containerSide">
           <div className="fav-header text-center">
               <h1>Customer Favorite Beauty Essentials</h1>
               <p>Made using clean, non-toxic ingredients, our products <br />
are designed for everyone.</p>
           </div>
           <div className="row text-center pb-10">
               <div className="col-lg-5">
                   <div className="fav-sideOne">
                   <img src={banner1} alt="" />

                   </div>
               </div>
               <div className="col-lg-7">
                   <div className=" row col-12">
                       <div className="col-4">
                           <img className='img-fluid' src={product1} alt="" />
                           <div className="fav-price-area">
                               <p>
                               $10.00 – $20.00
                               </p>
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
                       <div className="col-4">
                           <img className='img-fluid' src={product2} alt="" />
                           <div className="fav-price-area">
                               <p>
                               $10.00 – $20.00
                               </p>
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
                       <div className="col-4">
                           <img className='img-fluid' src={product3} alt="" />
                           <div className="fav-price-area">
                               <p>
                               $10.00 – $20.00
                               </p>
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
                   <div className=" row col-12">
                       <div className="col-4">
                           <img className='img-fluid' src={product1} alt="" />
                           <div className="fav-price-area">
                               <p>
                               $10.00 – $20.00
                               </p>
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
                       <div className="col-4">
                           <img className='img-fluid' src={product1} alt="" />
                           <div className="fav-price-area">
                               <p>
                               $10.00 – $20.00
                               </p>
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
                       <div className="col-4">
                           <img className='img-fluid' src={product1} alt="" />
                           <div className="fav-price-area">
                               <p>
                               $10.00 – $20.00
                               </p>
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
               </div>
           </div>
       </div>
   </div>
  )
}

export default Fav