import React from 'react'
import './discover.scss'
import d1 from '../../assets/d1.jpg'
import d2 from '../../assets/d2.jpg'
import { Link } from 'react-router-dom'
import {GrFormNextLink} from 'react-icons/gr'
import {BsInstagram} from 'react-icons/bs'
import fav1 from '../../assets/fav1.jpg'
import fav2 from '../../assets/fav2.jpg'
import fav3 from '../../assets/fav3.jpg'
import fav4 from '../../assets/fav4.jpg'
import fav5 from '../../assets/fav5.jpg'


const Discover = () => {
  return (
  <div className="discover-area">
      <div className="containerSide">
      <div className="discover-header text-center">
               <h1>More to Discover</h1>
               <p>Our bundles were designed to conveniently package your tanning essentials while saving you money.</p>
           </div>
           <div className="row">
               <div className="col-lg-6">
                   <div className="discover-box">
                       <img  src={d1} alt="" />
                       <div className="discover-text text-center">
                           <Link to='/'>Summer Collection</Link>
                           <p>Shop Now<GrFormNextLink/></p>
                       </div>
                   </div>
               </div>
               <div className="col-lg-6">
                   <div className="discover-box">
                       <img  src={d2} alt="" />
                       <div className="discover-text text-center">
                           <Link to='/'>From Our Blog</Link>
                           <p>Read More<GrFormNextLink/></p>
                       </div>
                   </div>
               </div>
           </div>
           <div className="fav-section d-flex justify-content-between align-items-center">
               <div className="favimg-box">
                   <img  className='img-fluid'  src={fav1} alt="" />
                   <div className="fav-overlay">
                 <i>    <BsInstagram/></i>
                   </div>
               </div>
               <div className="favimg-box">
                   <img className='img-fluid' src={fav2} alt="" />
                   <div className="fav-overlay">
                 <i>    <BsInstagram/></i>
                   </div>
               </div>
               <div className="favimg-box ">
                   <img  className='img-fluid'  src={fav3} alt="" />
                   <div className="fav-overlay">
                 <i>    <BsInstagram/></i>
                   </div>
               </div>
               <div className="favimg-box">
                   <img  className='img-fluid'  src={fav4} alt="" />
                   <div className="fav-overlay">
                 <i>    <BsInstagram/></i>
                   </div>
               </div>
               <div className="favimg-box">
                   <img  className='img-fluid'  src={fav5} alt="" />
                   <div className="fav-overlay">
                 <i>    <BsInstagram/></i>
                   </div>
               </div>
           </div>
      </div>
  </div>
  )
}

export default Discover