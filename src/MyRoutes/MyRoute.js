import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import FaqMain from '../pages/FaqMain'
import BlogDetail from '../pages/BlogDetail'
import MyAccount from '../components/myAcc/MyAccount'
import ResetPass from '../pages/ResetPass'
import ProductDetails from '../pages/ProductDetails'
import ShopPage from '../pages/ShopPage'
import MyCart from '../pages/MyCart'

const MyRoute = () => {
  return (
   <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/blog' element={<Blog/>}></Route>
<Route path='/bdetails' element={<BlogDetail/>}></Route>
<Route path='/shop' element={<ShopPage/>}></Route>
<Route path='/cart' element={<MyCart/>}></Route>
<Route path='/productdetails' element={<ProductDetails/>}></Route>
<Route path='/contact' element={<Contact/>}></Route>
<Route path='/faq' element={<FaqMain/>}></Route>
<Route path='/myaccount' element={<MyAccount/>}></Route>
<Route path='/resetpass' element={<ResetPass/>}></Route>




   </Routes>
  )
}

export default MyRoute