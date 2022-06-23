import React from 'react'
import './blog-detail.scss'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import blogBanner1 from '../../assets/blogBanner1.jpg'
import pp from '../../assets/pp.png'
import {Link} from 'react-router-dom'

const BDetails = () => {
  return (
<section className="blogDetail">
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
          <BreadcrumbLink  href="/bdetails">
          Hair & Body
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink className="active" href="/bdetails">
          Tips & Procedure To Apply Luxury Beauty Cosmetic Cream
          </BreadcrumbLink>
        </BreadcrumbItem>
        
      </Breadcrumb>
  <div className="container">
    <div className="blogDetailArea text-center">
 <div className="detail ">
 <div className="banner-category ">
            <button>Hair&Body</button>
          </div>
          <h1>Tips & Procedure To Apply Luxury Beauty Cosmetic Cream</h1>
          <div className="comment-list">
          <ul className='list-unstyled d-flex'>
            <li>
              <Link to='/'><img src={pp} alt="" /></Link>
            </li>
            <li>
              <span>By</span>
              <Link to='/'> g5plusacc</Link>
            </li>
            <li className='li-3'>
              <Link to='/'> October 1, 2021</Link>
            </li>
            <li className='li-4'>
              <Link to='/'>0 Comments</Link>
            </li>
          </ul>
         </div>
         <div className="blogDimg">
         <img src={blogBanner1} alt="" />
          <div className="blog-image-overlay"></div>
         </div>
 </div>
    </div>
  </div>
</section>
  )
}

export default BDetails