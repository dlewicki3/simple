import React from 'react'
import './O3.css';
import F1 from '../components/F1.png';
import F2 from '../components/F2.png';
import F3 from '../components/F3.webp';

const O3 = () => {
  return (
   <div className="o3">
    <div className="na-txt3">Zypsy companies</div>
    <div className="k3">
<div className="kwa3">
  <div className="foto3">
    <img className='fotka3' src = {F1}></img>
<br></br>
<br></br>
    <p className='small-txt3'>AI</p>
    <br></br>
    <p className='middle-txt3'>Lorem ipsum dolor sit amet consectetur.</p>
    <div className="na-btn3">
  <button className='btn3'>CHAPTER ONE</button>
  <button className='btn3'>ZYPSY</button>
</div>
  </div>
</div>
<div className="kwa3">
<div className="foto3">
<img className='fotka3' src = {F2}></img>
<br></br>
<br></br>
<p className='small-txt3'>NASH</p>
<br></br>
<p className='middle-txt3'>Lorem, ipsum dolor.</p>
<div className="na-btn3">
  <button className='btn3'>CHAPTER ONE</button>
  <button className='btn3'>ZYPSY</button>
</div>
</div>
</div>
<div className="kwa3">
<div className="foto3">
<img className='fotka3' src = {F3}></img>
<br></br>
<br></br>
<p className='small-txt3'>PHI</p>
<br></br>
<p className='middle-txt3'>Lorem ipsum dolor sit amet consectetur.</p>
<div className="na-btn3">
  <button className='btn3'>CHAPTER ONE</button>
  <button className='btn3'>ZYPSY</button>
</div>
</div>
</div>
    </div>
   </div>
  )
}

export default O3