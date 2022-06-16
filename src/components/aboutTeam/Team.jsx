import React from 'react'
import './team.scss'
import memberOne from '../../assets/memberOne.jpg'
import memberTwo from '../../assets/memberTwo.jpg'
import member3 from '../../assets/member3.jpg'
import member4 from '../../assets/member4.jpg'
import {AiOutlineTwitter,AiOutlineInstagram,AiFillYoutube} from 'react-icons/ai'
import{FaFacebook} from 'react-icons/fa'

const Team = () => {
  return (
  <section className="aboutTeam">
    <div className="container">
    <div className="team-head-text text-center">
            <h1>We pride ourselves on have a team of highly skilled</h1>
            <p>Not cool. Our tightly knitted fabric holds its form after repeated wear. 
            Plus, Aldays dress up or down, no prob. So you can wear them all day. Get it?</p>
        </div>
        <div className="team-boxes  row align-items-center justify-content-between">
          <div className="col-12 col-lg-3">
            <div className="team-box text-center">
                <img className='img-fluid' src={memberOne} alt="" />
                <div className="team-hover-icons">
                 <i><AiOutlineTwitter/></i>
                 <i><FaFacebook/></i>
                 <i><AiOutlineInstagram/></i>
                 <i><AiFillYoutube/></i>
                </div>
                <div className="team-name">
                    <h5>Glory to Fedutik.</h5>
                    <p> Founder, Chief Creative</p>
                </div>
            </div>
          </div>

          <div className="col-12 col-lg-3">
            <div className="team-box text-center">
                <img className='img-fluid' src={memberTwo} alt="" />
                <div className="team-hover-icons">
                 <i><AiOutlineTwitter/></i>
                 <i><FaFacebook/></i>
                 <i><AiOutlineInstagram/></i>
                 <i><AiFillYoutube/></i>
                </div>
                <div className="team-name">
                    <h5>Jennifer C.</h5>
                    <p> Founder, Chief Creative</p>
                </div>
            </div>
          </div>

          <div className="col-12 col-lg-3">
            <div className="team-box text-center">
                <img className='img-fluid' src={member3} alt="" />
                <div className="team-hover-icons">
                 <i><AiOutlineTwitter/></i>
                 <i><FaFacebook/></i>
                 <i><AiOutlineInstagram/></i>
                 <i><AiFillYoutube/></i>
                </div>
                <div className="team-name">
                    <h5>Valeriia Nadopta.</h5>
                    <p> Founder, Chief Creative</p>
                </div>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="team-box text-center">
                <img className='img-fluid' src={member4} alt="" />
                <div className="team-hover-icons">
                 <i><AiOutlineTwitter/></i>
                 <i><FaFacebook/></i>
                 <i><AiOutlineInstagram/></i>
                 <i><AiFillYoutube/></i>
                </div>
                <div className="team-name">
                    <h5>John Henry.</h5>
                    <p> Founder, Chief Creative</p>
                </div>
            </div>
          </div>

        </div>
    </div>
  </section>
  )
}

export default Team