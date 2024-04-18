import React from 'react'
import "./O1.css";
import Video from "../components/Video.mp4"

const O1 = () => {
  return (
    <div className="o1">
     <div className="k1">
     <div className="top">
     Design capital<br></br> from obscurity<br></br> to scale.
        </div>
        <div className="bottom-sticky" >
        <video className="vid" src={Video} autoPlay loop muted></video>

        </div>
     </div>
    </div>
  )
}

export default O1