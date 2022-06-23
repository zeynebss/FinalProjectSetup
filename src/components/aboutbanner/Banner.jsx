import React from 'react'
import '../responsive/responsive.scss'

import './banner.scss'
import about from '../../assets/about.jpg'

const Banner = () => {
  return (
   <section className="banner">
    <div className="container">
        <div className="row about-banner justify-content-between align-items-center  col-md-12">
           <div className="col-lg-7 ">
            <div className="about-image-banner">
                <figure><img className='img-fluid' src={about} alt="" /></figure>
            </div>
           </div>
           <div className="col-lg-5">
            <div className="about-text-banner">
                <h2>About Glowing</h2>
                <div className="text-p">
                    <p>Complexion-perfecting natural foundation enriched with antioxidant-packed 
                        superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid 
                        formula sets with a pristine matte finish for soft, velvety smooth skin. 
                        Made using clean,  non-toxic ingredients, our products are designed for everyone…</p>
                        <p>If I fell in love with a woman for an artistic reason, or from the point of view of my work, I think it would rob her of something. We live in an era of globalization and the era of the woman.
                     Never in the history of the world have women been more in control of their destiny.</p>
                </div>
                <div className="row col-12 text-banner-down">
               <div className="col-lg-6 col-md-6 text-side-1">
               <h5>Message</h5>
                  <p>Send us a text & an ambassador will respond when available.</p>
                  <h6>1-814-251-9966</h6>
               </div>
               <div className="col-lg-6 col-md-6 text-side-2">
                <h5>Store Hours</h5>
                <ul className='list-unstyled'>
                    <li><label>Mon – Fri:</label> <span>     08:30 – 20:00</span></li>
                    <li><label>Sat & Sun:</label> <span>     09:30 – 21:30</span></li>
                </ul>

               </div>
                </div>
            </div>
           </div>

        </div>
    </div>
   </section>
  )
}

export default Banner