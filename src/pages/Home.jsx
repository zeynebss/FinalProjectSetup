import React from 'react'
import Explore from '../components/explore/Explore'
import Slider from '../components/homeslider/Slider'
import Other from '../components/otherstuff/Other'
import Seen from '../components/otherstufftwo/Seen'
import ProductFeatured from '../components/product/ProductFeatured'
import Fav from '../components/fav/Fav'
import Discover from '../components/discover/Discover'
import Scroll from '../components/scrolltop/Scroll'


const Home = () => {
  return (
    <div>
        <Slider/>
        <ProductFeatured/>
        <Explore/>
        <Other/>
        <Seen/>
        <Fav/>
        <Discover/>
        <Scroll/>
    </div>
  )
}

export default Home