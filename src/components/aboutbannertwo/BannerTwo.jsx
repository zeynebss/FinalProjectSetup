import React from 'react'
import './bannerTwo.scss'
import organic from '../../assets/organic.jpg'
import cruelty from '../../assets/cruelty.jpg'
import period from '../../assets/period.jpg'
import aboutone from '../../assets/aboutone.jpg'
import abouttwo from '../../assets/abouttwo.jpg'


const BannerTwo = () => {
  return (
<section className="bannerTwo">
    <div className="container">
        <div className="bannerTwo-head-text text-center">
            <h1>We strive to live with compassion, kindness and empathy</h1>
            <p>lot of so-called stretch denim pants out there are just glorified sweatpants – they get baggy and lose their shape. Not cool. Our tightly knitted fabric holds its form after repeated wear.
                 Plus, Aldays dress up or down, no prob. So you can wear them all day. Get it?</p>
        </div>
        <div className="row banner-card-box align-items-center justify-content-between text-center">
            <div className="a-product  col-lg-4">
                <img  src={organic} alt="" />
                <div className="bannertwo-text">
                    <h4>Guaranteed PURE</h4>
                    <p>All Grace formulations adhere to strict 
                        purity standards and will never contain harsh or toxic ingredients</p>
                </div>
            </div>
            <div className="a-product   col-lg-4">
                <img   src={cruelty} alt="" />
                <div className="bannertwo-text">
                    <h4>Completely Cruelty-Free</h4>
                    <p>All Grace formulations adhere to strict 
                        purity standards and will never contain harsh or toxic ingredients</p>
                </div>
            </div>
            <div className="a-product  col-lg-4">
                <img  src={period} alt="" />
                <div className="bannertwo-text">
                    <h4>Ingredient Sourcing</h4>
                    <p>All Grace formulations adhere to strict 
                        purity standards and will never contain harsh or toxic ingredients</p>
                </div>
            </div>
        </div>
        <div className="bannerforabout">
            <div className="row  align-items-center justify-content-between">
                <div className="banner-image col-12 col-lg-6">
                        <figure><img className='img-fluid' src={aboutone} alt="" /></figure>
                </div>
                <div className="banner-image col-12 col-lg-6">
                       <figure> <img className='img-fluid' src={abouttwo} alt="" /></figure>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default BannerTwo