import React from 'react'
import './other.scss'

const Other = () => {
  return (
    <div className="oterStuff">
        <div className="containerSide">
            <div className="d-flex  others justify-content-between align-items-center">
               
                    <div className="free-shipping">
                        <h3>Free Shipping</h3>
                        <p>Free Shipping for orders over $130</p>
                    </div>
                    <div className="return">
                        <h3>
                        Returns
                        </h3>
                        <p>Within 30 days for an exchange.</p>
                    </div>
                    <div className="support">
               <h3>     Online Support</h3>
               <p>24 hours a day, 7 days a week</p>
                    </div>
                    <div className="payment">
                        <h3>Flexible Payment</h3>
                        <p>Pay with Multiple Credit Cards</p>
                    </div>
                </div>
            </div>
        </div>

     
  
  )
}

export default Other