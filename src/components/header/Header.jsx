import React, { useState,useEffect } from "react";
import './header.scss'
import '../responsive/responsive.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import {FiSearch,FiShoppingBag,FiChevronDown} from 'react-icons/fi'
import {AiOutlineUser} from 'react-icons/ai'
import {MdNavigateNext} from 'react-icons/md'
import {BsStar} from 'react-icons/bs'
import { Modal } from 'react-modal-overlay'
import 'react-modal-overlay/dist/index.css'
import Aos from "aos";
import 'aos/dist/aos.css'



const Header = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  const [isOpen, setIsOpen] = useState(false)

   
  return (
  <header   className="header">
     
<div className="containerSide">
<div className="shipping text-center">
      <p> Free shipping on all U.S. orders $50+</p>
      </div> 
   <nav  className="navMenu">
     <div  data-aos='fade-up' className="d-flex justify-content-between align-items-center">
       <div className="menu">
           <ul className="d-flex list-unstyled">
           <li><Link className="active-dec" to='/'>Home</Link></li>
           <li><Link to='/about'>About</Link></li>
           <li><Link to='/'>Blog <FiChevronDown/></Link>
           <ul className="dropdown list-unstyled">
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
            <li> 
              <Link to='/bdetails'>Blog Details</Link>
            </li>
           </ul>
           </li>
           <li><Link to='/'>Shop <FiChevronDown/></Link>
           <ul className=" dropdown list-unstyled m-0 p-0 ">
            <li>
              <Link to='/shop'>Shop</Link>
            </li>
            <li>
              <Link to='/'>Product Details</Link>
            </li>
            <li>
              <Link to='/'>Shopping Cart<MdNavigateNext/></Link>
              <ul className="dropdown-2 list-unstyled m-0 p-0">
                <li>
                  <Link to='/'>My Cart</Link>
                </li>
                <li>
                  <Link to='/'>Checkout</Link>
                </li>
                <li>
                  <Link to='/'>Order tracking</Link>
                </li>
              </ul>
            </li>
           </ul>
           </li>
           <li><Link to='/'>Contact <FiChevronDown/></Link>
         <ul className=" dropdown list-unstyled m-0 p-0 ">
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li>
            <Link to='/faq'>Faq</Link>
          </li>
         </ul>
           </li>
       <li><img src={logo} className="img-fluid" alt="" /></li>
           </ul>
          

       </div>
   
       <div className="header-icons">
           <ul className="d-flex list-unstyled m-0 p-0">
               <li>
                   <Link to='/'><i onClick={() => setIsOpen(true)}><FiSearch/></i></Link>
                   <Modal show={isOpen} closeModal={() => setIsOpen(false)}>
                 <div data-aos="fade-up" className=" search-bar-items d-flex">
                 <select name="" id="">
                  <option value="">All Categories</option>
                      <option value="">BodyCare</option>
                      <option value="">SkinCare</option>
                   <option value="">HairCare</option>

                    </select>
        <input type="text" placeholder="Type and hit enter" />
        <i style={{color:"white"}}><FiSearch/></i>
                 </div>
      </Modal>

               </li>
               <li>
               <Link to='/myaccount'><i><AiOutlineUser/></i> </Link>
               </li>
               <li>
                   <Link to='/'><i><BsStar/></i></Link>
               </li>
               <li>
                   <Link to='/cart'><i><FiShoppingBag/></i></Link>
               </li>
           </ul>
        
           
       </div>
    

     </div>

      </nav>
</div>

  </header>
  )
}

export default Header