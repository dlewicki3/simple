import React from 'react'
import "./O4.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const O4 = () => {
  return (
<div className="o4">
  <div className='na-txt4'>Recent news</div>
    <div className="k4">
        <div className="pion">
            <div className="kwa44">01</div>
            <div className="kwa44">02</div>
            <div className="kwa44">03</div>
        </div>
        <div className="na-pro">
<div className="pro4"><p className='txt4'>Cortex raises $35M Series B for its internal developer portal</p></div>
<div className="pro4"><p className='txt4'>Captions raises $25 Million to bring AI to creators </p></div>
<div className="pro4">
  <p className='txt4'>
Robust Intelligence to be named most innovative company in data science of 2023
</p>
</div>
</div>
    </div>
    <div className="na-btn4">
        <button className='btn4'>Read more news <MdOutlineKeyboardArrowRight  size={30}/>

</button>
    </div>
</div>
  )
}

export default O4