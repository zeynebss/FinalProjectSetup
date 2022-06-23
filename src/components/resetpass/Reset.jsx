import React from 'react'
import './reset.scss'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { MdNavigateNext } from "react-icons/md";
import { FaHome } from "react-icons/fa";


const Reset = () => {
  return (
<section className="resetPass">
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
          <BreadcrumbLink className="active" href="/myaccount">
          My Account
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    <div className="container">
        <div className="resetHeadtxt">
        <h1>My Account</h1>
</div>
<div className="reset-form">
    <form action="">
        <p>Lost your password? Please enter your username or email address.
             You will receive a link to create a new password via email.</p>
             <label htmlFor="">USERNAME OR EMAIL</label>
       <p>
       <input type="email" name="" id="" /> <br />
             <button className='btn btn-dark' type="reset">Reset Password</button>
       </p>
    </form>
</div>
    </div>
</section>
  )
}

export default Reset