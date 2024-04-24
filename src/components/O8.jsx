import React, { useEffect } from 'react';
import "./O8.css";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const O8 = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.pin8',
          { opacity: 0 },
          {  opacity: 1, duration: 1,  ease: 'power2.out', scrollTrigger: { trigger: '.pin8', start: 'top 70%', end: 'bottom center' } }
        );
        gsap.fromTo('.pin88',
          {  opacity: 0 },
          {  opacity: 1, duration: 1,  delay:0.5,  ease: 'power2.out', scrollTrigger: { trigger: '.pin88', start: 'top 80%', end: 'bottom center'} }
        );

      }, []);

  return (
<div className="o8">
    <div className="k8">
<div className="pin8">Sora</div>
    </div>
    <div className="k88">
        <div className="pin88">Lorem ipsum dolor sit amet consectetur adipisicing</div>
    </div>
</div>
  )
}

export default O8