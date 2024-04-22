import React, { useEffect } from 'react';
import "./O6.css";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';




const O6 = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.pro6',
          { opacity: 0 },
          {  opacity: 1, duration: 1,  ease: 'power2.out', scrollTrigger: { trigger: '.pro6', start: 'top 80%', end: 'bottom center' } }
        );
        gsap.fromTo('.pro66',
          {  opacity: 0 },
          {  opacity: 1, duration: 1,  ease: 'power2.out', scrollTrigger: { trigger: '.pro66', start: 'top 90%', end: 'bottom center' } }
        );
        gsap.fromTo('.pro666',
          {  opacity: 0 },
          { opacity: 1, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: '.pro666', start: 'top 90%', end: 'bottom center' } }
        );

      }, []);

  return (
<div className="o6">
    <div className="k6">
<div className="pro6">
    <span className='small-digit-span'>01</span>
    <p className='big-txt6'>Strategy</p>
    <p className='ukosnik' >/</p>
    <span className='small-digit-span'>02</span>
    <p className='big-txt6'>Branding</p>
</div>
<div className="pro66">
<span className='small-digit-span'>03</span>
<p className='big-txt6'>Engineering</p>
<p className='ukosnik'>/</p>
<p className='big-txt6'>Product Design</p>
</div>
<div className="pro666">
<span className='small-digit-span'>05</span>
<p className='big-txt6'>Web</p>
<p className='ukosnik'>+</p>
<p className='big-txt6'> App Development</p>
</div>
    </div>
</div>
  )
}

export default O6