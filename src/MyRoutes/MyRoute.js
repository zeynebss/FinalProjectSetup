import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Blog from '../pages/Blog'
import Shop from '../pages/Shop'
import Contact from '../pages/Contact'

const MyRoute = () => {
  return (
   <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/blog' element={<Blog/>}></Route>
<Route path='/shop' element={<Shop/>}></Route>
<Route path='/contact' element={<Contact/>}></Route>

   </Routes>
  )
}

export default MyRoute