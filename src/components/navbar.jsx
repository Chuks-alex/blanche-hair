import React, {useState} from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import {MdClose} from "react-icons/md"
import {ImSun} from "react-icons/im"
import {BsFillMoonFill} from "react-icons/bs"
import "./navbar.css"
import logo from "../assets/logo.png"
function Navbar() {
    let [navstate, setnavstate] = useState(false)
   
  return (
    <nav>
        
    <div className="container py-3 mx-3">
        <div className="brand">
            <img src={logo} alt="" />

        </div>
        {/* ======link container */}
        <div className="links-container">
            <div className="toggle">
               {navstate? <MdClose onClick={()=> setnavstate(false)}/> : <GiHamburgerMenu onClick={()=> setnavstate(true)} />} 
            </div>
        </div>
        <div className={`links ${navstate ? "responsive-toggle" : ""}`}>
        <ul>
           
        
          
         <li><a href="#home">home</a></li>
         <li><a href="#home">contact</a></li>
         <li><a href="#home">products</a></li>
         <li><a href="#home">about</a></li>
         <li><a href="#home">help</a></li>
        </ul>
        </div>
    </div>
    </nav>
  )
}

export default Navbar