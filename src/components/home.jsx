import React from 'react'
import "./home.css"
import {BiSearch} from "react-icons/bi"
import hero4 from "../assets/hero4.webp"
function Home() {
  return (
    <div className="home">
      <div className="containerr mx-3 py-3">
      <div className="title-container">
        <h1>welcome to Blanche hairs the very place to give your hair a meaning</h1>
        <div className="input-container">
<input type="text" placeholder='I want to buy....' />
        <div className="icon">
          <BiSearch/>
        </div>
        </div>
      </div>
      <div className="extra-image">
        <img src={hero4} alt="" />
      </div>
      </div>
    </div>
  )
}

export default Home