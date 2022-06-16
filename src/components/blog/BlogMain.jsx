import React from 'react'
import './blog-main.scss'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import blogBanner1 from '../../assets/blogBanner1.jpg'
import pp from '../../assets/pp.png'
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
        <h1>Tips & Procedure To Apply Luxury Beauty Cosmetic Cream</h1>
        <Breadcrumb
        spacing="8px"
        className="breadCrmbforBlog"
        separator={<MdNavigateNext color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/">
           <img src={pp} alt="" />{" "}
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink className="active" href="/faq">
      Blog
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
     </div>
      </div>
    </div>
   </section>
  )
}

export default BlogMain