import React from 'react'
import "./O1.css";
// import Video from "../components/Video.mp4"
import Foto3 from '../components/Foto3.png';


const O1 = () => {
  return (
    <div className="o1">
     <div className="k1">
     <div className="top">
     Design capital<br></br> from obscurity<br></br> to scale.
        </div>
        <div className="bottom-sticky" >
        <img className="foto1" src={Foto3} autoPlay loop muted></img>

        </div>
     </div>
    </div>
  )
}

export default O1