import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'
import {AiOutlineTwitter,AiOutlineInstagram} from 'react-icons/ai'
import {RiFacebookFill} from 'react-icons/ri'
import {FaYoutube} from 'react-icons/fa'
import logo from '../../assets/logo.png'
import iconPay from '../../assets/iconPay.png'
const Footer = () => {
  return (
   <footer className="footer-area">
       <div className="container">
       <div className="row justify-content-between align-items-center">
       <div className="footer-up col-lg-3">
 <h5>Company</h5>
 <ul className='list-unstyled'>
    <li>Find a location nearest you. See <Link to='/'>Our Stores</Link></li>
    <li style={{color:"black",fontWeight:"500"}}>+391 (0)35 2568 4593 <br />
</li>
<li>hello@domain.com</li>
 </ul>
       </div>
       <div className="footer-up col-lg-2">
 <h5>Useful links</h5>
 <ul className='list-unstyled'>
    <li>New products</li>
    <li>Best sellers</li>
    <li>new bundle</li>
    <li>Online gift card</li>
 </ul>
       </div>
       <div className="footer-up col-lg-2">
 <h5>Infomation</h5>
 <ul className='list-unstyled'>
    <li>start a return</li>
    <li>contact us</li>
    <li>shipping & Faq</li>
    <li>Term  &Conditions</li>
  
 </ul>
       </div>
       <div className="footer-up col-12 col-lg-5">
 <h1 style={{fontSize: "30px"}}>Good emails.</h1>
<p>Enter your email below to be the first to know about new collections and product launches.</p>
<form action="">
<input className='input-part' type="text" placeholder='Enter your email address' />
<input className='input-btn' type="submit" value="Subscribe" />
</form>
       </div>
       </div>
       <div className="footer-end">
           <div className="d-flex align-items-center justify-content-between">
               <div className="footer-icons">
            <ul className='list-unstyled d-flex'>
                <li><span>© Glowing 2021</span></li>
                <li><i><AiOutlineTwitter/></i></li>
                <li><i><RiFacebookFill/></i></li>
                <li><i><AiOutlineInstagram/></i></li>
                <li><i><FaYoutube/></i></li>
            </ul>
               </div>
               <div className="footer-logo">
                   <img src={logo} alt="" />
               </div>
               <div className="footer-payment">
                   <img src={iconPay} alt="" />
               </div>
           </div>
       </div>
       </div>
   </footer>
  )
}

export default Footer