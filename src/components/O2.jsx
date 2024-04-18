import React from 'react'
import "./O2.css";
import Foto1 from "../components/Foto1.webp";
import Foto2 from "../components/Foto2.webp";

const O2 = () => {
  return (
   <div className="o2">
    <div className="k2">
<div className="top2">
  <img className='foto1' src= {Foto1}></img>
</div>
<div className="bottom2">
  <div className="left2">
    <p className='big-txt2'>Lorem ipsum dolor sit amet.</p>
    <br></br>
    <br></br>
    <p className='small-txt2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel perferendis autem natus harum, facilis amet blanditiis ipsum. Voluptatum odio minima recusandae? Neque dicta totam recusandae ex minus quis natus quia. Dolor tenetur voluptas quidem aliquid nobis sit unde distinctio amet!</p>
    <br></br>
    <br></br>
    <div className="sekwencja">
      <div className="left22">1.2B
      <br></br>
      <p className='small-txt2'>Delta visions</p>
      </div>
      <div className="right22">25
      <br></br>
      <p className='small-txt2'>Delta visions</p>

      </div>
    </div>
  </div>

  <div className="right2">
    <img className='foto1' src = {Foto2}></img>
  </div>
</div>
    </div>
   </div>
  )
}

export default O2