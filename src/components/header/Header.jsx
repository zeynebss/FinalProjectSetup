import React, { useState,useEffect } from "react";
import './header.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import {FiSearch,FiShoppingBag,FiChevronDown} from 'react-icons/fi'
import {AiOutlineUser} from 'react-icons/ai'
import {MdNavigateNext} from 'react-icons/md'
import {BsStar} from 'react-icons/bs'

const Header = () => {
  

   
  return (
  <header className="header">
     
<div className="containerSide">
<div className="shipping text-center">
      <p> Free shipping on all U.S. orders $50+</p>
      </div> 
   <nav className="navMenu">
     <div className="d-flex justify-content-between align-items-center">
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
              <Link to='/'>Blog Details</Link>
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
                   <Link to='/'><i><FiSearch/></i></Link>
               </li>
               <li>
               <Link to='/'><i><AiOutlineUser/></i> </Link>
               </li>
               <li>
                   <Link to='/'><i><BsStar/></i></Link>
               </li>
               <li>
                   <Link to='/'><i><FiShoppingBag/></i></Link>
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