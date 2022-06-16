import React, { useState,useEffect } from 'react'
import './scroll.scss'
import {RiArrowUpSLine} from 'react-icons/ri'
import { BsTranslate } from 'react-icons/bs';

const Scroll = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
             
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          
        });
    };
  return (
    <div className='scrollTotop'>
        <div className="scrl-btn">
            {" "}
            {showTopBtn && (
        <button
      onClick={goToTop}
       
     
      >
     <i><RiArrowUpSLine/></i>
      </button>
          )}{" "}
        </div>
    
    </div>
  )
}

export default Scroll