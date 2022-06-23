import React from 'react'
import './my-acc.scss'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { MdNavigateNext } from "react-icons/md";
import { FaHome } from "react-icons/fa";

const MyAccount = () => {
  return (
   <section className='myaccounSection'>
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
   
        <div className="accountLogin">
            <div className="account-head">
                <h1>My Account</h1>
            </div>
           

            <div className="account-input">
            <h2>Login</h2>
            <form action="">
                <label htmlFor="">USERNAME OR EMAIL ADDRESS <i>*</i></label>
                <input type="text" />
                <label htmlFor="">PASSWORD <i>*</i></label>
                <input type="password" />
                <span>
                    <input className='check' type="checkbox"   />
                  Remember me

                </span>
                <button className='btn btn-dark' type="submit">Log in</button>
               <p>
               <Link to='/resetpass'>
                Lost your password?
             

                </Link>
               </p>

            </form>
            </div>
         
        </div>
    </div>
   </section>
  )
}

export default MyAccount