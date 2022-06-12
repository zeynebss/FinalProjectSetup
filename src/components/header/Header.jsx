import React from "react";
import './header.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import {FiSearch,FiShoppingBag,FiChevronDown} from 'react-icons/fi'
import {AiOutlineUser} from 'react-icons/ai'
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
           <li><Link to='/blog'>Blog <FiChevronDown/></Link></li>
           <li><Link to='/shop'>Shop <FiChevronDown/></Link></li>
           <li><Link to='/contact'>Contact <FiChevronDown/></Link></li>
       <li> <Link to='/'><img src={logo} className="img-fluid" alt="" /></Link></li>
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