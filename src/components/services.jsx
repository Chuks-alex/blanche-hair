import React from 'react'
import "./services.css"
import {HiArrowSmRight} from "react-icons/hi"
import brazilian1 from "../assets/brazilian1.avif"
import closure3 from "../assets/closure3.avif"
import closure1 from "../assets/closure1.avif"
import closure2 from "../assets/closure2.avif"
function Services() {
  return (
    <div className='services-container mx-3'>
      <div className="containar">
        <div className="service one">
          <p>weekly deals</p>
          <h4>free delivery</h4>
          <button>learn more</button>
          <div className="image">
            <img src={brazilian1} alt="" />
          </div>
        </div>
        <div className="image">
          <img src={closure3} alt="" />
        </div>
        <div className="service two">
          <div className="content">
            <h4>disc upto 25%</h4>
            <p>learn more <HiArrowSmRight/></p>
          </div>
        </div>
        <div className="image">
          <img src={closure1} alt="" />
        </div>
        <div className="service two">
          <div className="content">
            <h4>disc upto 25%</h4>
            <p>learn more <HiArrowSmRight/></p>
          </div>
        </div>
        <div className="service four">
          <p>BlancheHair monthly deals</p>
          <h4>free delivery</h4>
          <p>learn more  <HiArrowSmRight/></p>
          <div className="image">
            <img src={closure2} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services