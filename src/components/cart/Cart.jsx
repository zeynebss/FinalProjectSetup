import React from 'react'
import './cart.scss'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import {BiWindow} from 'react-icons/bi'
import { Link } from 'react-router-dom';
import LightGallery from 'lightgallery/react';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import product1 from '../../assets/product1.jpg'
const Cart = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
  return (
   <section className="cartArea">
       <Breadcrumb
        spacing="8px"
        className="breadCrmb"
        separator={<MdNavigateNext color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
            <i>
              <FaHome />
            </i>{" "}
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink  href="/shop">
   Shop
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink className="active" href="/cart">
   Cart
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    <div className="container">
        <div className="cart-txt-head text-center"><h1>Cart</h1></div>
        <div className="cart-box">
            <p><i><BiWindow/></i> Your cart is currently empty.</p>
        </div>
       <Link to='/shop'><button  className='btn btn-dark'>Return to shop</button></Link> 

       <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <Link to={product1}>
                    <img alt="img1" src={product1}/>
                </Link>
                <Link to={product1}>
                    <img alt="img2" src={product1}/>
                </Link>
                ...
            </LightGallery>
    </div>
   </section>
  )
}

export default Cart