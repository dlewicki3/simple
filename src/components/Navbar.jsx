import React from 'react'
import "./Navbar.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="nav">
<div className="navbar">
  <div className="logo">Dominik Lewicki</div>
  <div className="links">
    <li>About</li>
    <li>Work</li>
    <li>Services</li>
    <li>Spotlight</li>
    <li>Careers</li>
    <button className='btn-nav'>Book a call <MdKeyboardArrowRight  size={20}/>
</button>
  </div>
</div>
</div>
  )
}

export default Navbar