import React from 'react'
import explore1 from '../../assets/explore1.jpg'
import explore2 from '../../assets/explore2.jpg'
import './explore.scss'


const Explore = () => {
  return (
    <div className="explore-area">
        <div className="containerSide">
            <div className="row explore-box justify-content-between align-items-center">
                <div className=" col-12 col-lg-6">
               <figure><img className=" img-fluid"  src={explore1} alt="" /></figure>     
                    <div className="explore-text">
                        <p> NEW COLLECTION </p>
                        <div className="explore-desc">
                            <h2>Intensive Glow C+ <br/>  Serum</h2>
                        </div>
                        <div className="explore-button">
                            <button>
                                Explore More
                            </button>
                        </div>
                    </div>
                </div>
                <div className=" col-12 col-lg-6">
                  <figure>  <img className=" img-fluid" src={explore2} alt="" /></figure>
                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Explore