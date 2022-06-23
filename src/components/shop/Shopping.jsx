import React from 'react'
import './shop.scss'
import {AiOutlineBars} from 'react-icons/ai'
import {BsFilterLeft} from 'react-icons/bs'
import {HiPlusSm} from 'react-icons/hi'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
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
const Shopping = () => {
  return (
    <section  className="shop">
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
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink className="active" href="/shop">
   Shop
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
        <div className="container">
          <div className="txt-head-shop text-center">
            <h1>Shop</h1>
          </div>
            <div className="shop-filter-area row align-items-center justify-content-between">
            <div className="col-lg-7">
            <div className="product-count-results ">
           <p>Showing 1–9 of 16 results</p>
             </div>
             
            </div>
            <div className="col-lg-5">
              
              <div className="d-flex shop-filter">
              <div className="bar">
                <i><AiOutlineBars/></i>
              </div>
              <div className="select-group">
              <select name="" id="">
                <option value="">Sort By popularity</option>
                <option value="">Sort By latest</option>
                <option value="">Sort By avarage rating</option>
                <option value="">Sort By price: low to high</option>
                <option value="">Sort By price: high to low</option>
            
              
             
              </select>
              

              </div>
            <div className="filter">
             <button >Filter</button> 
            </div>
            </div>
            </div>
            </div>
<div className="product-box text-center d-flex">
 <div className="box1">
 <img className='img-fluid' src={product1} alt="" />
  <h6>product-1</h6>
 </div>
 <div className="box1">
 <img className='img-fluid' src={product1} alt="" />
  <h6>product-1</h6>
 </div>
 <div className="box1">
 <img className='img-fluid' src={product1} alt="" />
  <h6>product-1</h6>
 </div>
</div>
            <div className="more-btn">
              <button className="btn btn-light">
              
             <i><HiPlusSm/></i>  More
              
              </button>
            </div>
        </div>
    </section>
  )
}

export default Shopping