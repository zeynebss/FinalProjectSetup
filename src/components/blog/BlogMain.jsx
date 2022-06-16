import React from 'react'
import './blog-main.scss'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import blogBanner1 from '../../assets/blogBanner1.jpg'
import pp from '../../assets/pp.png'
import {Link} from 'react-router-dom'
const BlogMain = () => {
  return (
   <section className="blogMain">
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
          <BreadcrumbLink className="active" href="/faq">
      Blog
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    <div className="containerSide">
      <div className="blog-banner-area">
        <div className="blog-head-text text-center">
          <h1>Blog</h1>
        </div>
        <div className="blog-banner-img-area">
         <div className="blog-banner-img">
          <img src={blogBanner1} alt="" />
          <div className="blog-image-overlay"></div>
          <div className="banner-category ">
            <span>Hair&Body</span>
          </div>
         
         </div>
         
        </div>
      <div className="blog-banner-text text-center">
        <h1 >Tips & Procedure To Apply Luxury Beauty Cosmetic <br/> Cream</h1>
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
         <div className="read-more">
          <p>Awkwardness gives me great comfort. I’ve never been cool, 
            but I’ve felt cool. I’ve been in the cool place, but I wasn’t really cool – 
            I was trying to pass for hip or cool. It’s the awkwardness that’s nice. We look our 
            best in subdued colors, sophisticated cuts, and a general air of sleek understatement. […]</p>
            <div className="read-more-btn">
              <button type='submit' className="btn btn-dark">
              Read More
              </button>
            </div>
         </div>
     </div>
      </div>
    </div>
   </section>
  )
}

export default BlogMain