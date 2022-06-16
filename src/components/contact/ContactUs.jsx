import React from 'react'
import './contact-us.scss'
import {Link} from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"
import {MdNavigateNext} from 'react-icons/md'

const ContactUs = () => {
  return (
  <section className="contactUs">
<Breadcrumb spacing='8px' className='breadCrmb' separator={<MdNavigateNext color='gray.500' />}>
  <BreadcrumbItem>
    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
  </BreadcrumbItem>

 <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink className='active' href='#'>Contact Us</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <BreadcrumbLink href='/faq'>Faq</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
    <div className="container">
        <div className="contact-head-text text-center">
            <h1>Keep In Touch with Us</h1>
            <p>We’re talking about clean beauty gift sets, of course –
                 and we’ve got a bouquet of beauties for yourself or someone you love.</p>
        </div>
    <div className="map">
        
    <iframe  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" frameborder="0">

</iframe>
    </div>
   <div className="contact-area">
    <div className="c-head">
      <h1>Sent A Message</h1>
    <div className="row justify-content-between align-items-center">
    <div className="col-lg-8">
     <div className="form-area">
     <form action="">
     <div className="row col-12">
     <div className="col-lg-6">
      <input type="text" name="" id="" placeholder='Name*' />
     </div>
     <div className="col-lg-6">
      <input type="email" name="" id="" placeholder='Email*' />
     </div>
     </div>
     <div className="messanger">
     <textarea name="" id="" cols="77" rows="" placeholder='Messanger' ></textarea>

     </div>
     <div className="btn-area">
     <button className='btn btn-dark' type="submit">Submit</button>

     </div>
      </form>
     </div>
     </div>
     <div className="col-lg-4">
     <div className="location-area">
          <div className="location-box">
            <h6>Address</h6>
        <ul className='list-unstyled'>
          <li>3245 Abbot Kinney BLVD - PH Venice, CA 124</li>
          <li>76 East Houston StreetNew York City</li>
        </ul>
          </div>
         <Link to='/contact'>Get direction</Link>
         <div className="location-box">
            <h6>Contact</h6>
        <ul className='list-unstyled'>
          <li>Mobile:<label htmlFor=""> 068 26589 996</label></li>
          <li>Hotline:<label htmlFor="">1900 26886 </label>  </li>
          <li>Email: <label htmlFor="">hello@grace.com</label>  </li>
        </ul>
          </div>
     </div>

     </div>
    </div>
    </div>
   </div>
    
    </div>
  </section>
  )
}

export default ContactUs