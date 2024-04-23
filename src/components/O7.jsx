import React, { useEffect } from 'react';
import "./O7.css";
import Fot1 from "../components/Fot1.svg"
import Fot2 from "../components/Fot2.svg"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const O7 = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.kwa77',
          { opacity: 0 },
          {  opacity: 1, duration: 1,  ease: 'power2.out', scrollTrigger: { trigger: '.kwa77', start: 'top 80%', end: 'bottom center' } }
        );
        gsap.fromTo('.kwa7',
          {  opacity: 0 },
          {  opacity: 1, duration: 1,  delay:0.5,  ease: 'power2.out', scrollTrigger: { trigger: '.kwa7', start: 'top 90%', end: 'bottom center' } }
        );
        gsap.fromTo('.kwa777',
          {  opacity: 0 },
          { opacity: 1, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: '.kwa777', start: 'top 70%', end: 'bottom center' , } }
        );
        gsap.fromTo('.kwa7777',
        {  opacity: 0 },
        { opacity: 1, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: '.kwa7777', start: 'top 70%', end: 'bottom center'} }
      );
      }, []);





  return (
  <div className="o7">
    <div className="k7">
<div className="kwa77">
    <p className='big-txt3'>Engagements
</p>
<p className='small-txt7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam non nesciunt impedit incidunt?</p>
</div>

<div className="kwa7">
    < img className='foto7' src = {Fot1}></img>
    <p className='small-color-txt7'>Lorem, ipsum</p>
    <p className='small-txt7'>Lorem ipsum dolor, sit amet consectetur adipisicing <br></br>elit. Veritatis.</p>
</div>

<div className="kwa7">
< img className='foto7' src = {Fot2}></img>
<p className='small-color-txt7'>Lorem ipsum dolor sit.</p>
    <p className='small-txt7'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</div>


<div className="na-dwa-kwa7">
<div className="kwa777">
    < img className='foto7' src = {Fot1}></img>
    <p className='small-color-txt7'>Lorem, ipsum</p>
    <p className='small-txt7'>Lorem ipsum dolor, sit amet consectetur adipisicing <br></br>elit. Veritatis.</p>
</div>

<div className="kwa7777">
< img className='foto7' src = {Fot2}></img>
<p className='small-color-txt7'>Lorem ipsum dolor sit.</p>
    <p className='small-txt7'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</div>
</div>
    </div>
  </div>
  )
}

export default O7