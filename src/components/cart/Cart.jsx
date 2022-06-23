import React from 'react'
import './cart.scss'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import {BiWindow} from 'react-icons/bi'
const Cart = () => {
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
    </div>
   </section>
  )
}

export default Cart