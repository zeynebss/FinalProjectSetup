import React from 'react'
import './my-acc.scss'
import pp from '../../assets/pp.png'
const MyAccount = () => {
  return (
   <section>
    <div className="container">
        <div className="accountLogin">
            <div className="account-head">
                <h1>My Account</h1>
            </div>
            <div className="account-input">
            <form action="">
                <label htmlFor="">USERNAME OR EMAIL ADDRESS *</label>
                <input type="text" />
                <label htmlFor="">PASSWORD *</label>
                <input type="password" />
                <div className='d-flex'>
                    <input className='check' type="checkbox"  />
                  <span>Remember me</span>
                </div>
                <button className='btn btn-dark' type="submit">Log in</button>
                <p>Lost your password?</p>

            </form>
            </div>
         
        </div>
    </div>
   </section>
  )
}

export default MyAccount