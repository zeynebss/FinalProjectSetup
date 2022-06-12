import React from 'react'
import './seen.scss'
import sLogo1 from '../../assets/sLogo1.png'
import slo from '../../assets/slo.png'
import sLogo3 from '../../assets/sLogo3.png'

const Seen = () => {
  return (
 <div className="seen-area">
     <div className="text-center">
   <h1>  As seen in</h1>
     </div>
     <div className=" seen-logos col-12 row text-center justify-content-between align-items-center">
     <div className="seen-logo col-lg-4">
             <img src={sLogo1} alt="" />
             <p> “ Also the customer service is <br/> phenomenal. I would purchase again.”.</p>
         </div>
         <div className="seen-logo col-lg-4">
             <img src={slo} alt="" />
             <p>  “Great product line. Very attentive staff to deal with.”</p>
         </div>
         <div className="seen-logo col-lg-4">
             <img src={sLogo3} alt="" />
             <p>  "Looking to affordably upgrade your everyday dinnerware? Look no further than e.Space”.</p>
         </div>
     </div>
 </div>
  )
}

export default Seen