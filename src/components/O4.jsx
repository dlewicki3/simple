import React, { useEffect } from 'react';
import "./O4.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const O4 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.fromTo(
      '.txt4',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out', scrollTrigger: { trigger: '.pro4', start: 'top 90%', end: 'bottom center' } }
    );
  
    gsap.fromTo(
      '.txt44',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out', scrollTrigger: { trigger: '.pro44', start: 'top 90%', end: 'bottom center' } }
    );
  
    gsap.fromTo(
      '.txt444',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out', scrollTrigger: { trigger: '.pro444', start: 'top 90%', end: 'bottom center' } }
    );
  }, []);
  




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
<div className="pro44"><p className='txt44'>Captions raises $25 Million to bring AI to creators </p></div>
<div className="pro444">
  <p className='txt444'>
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