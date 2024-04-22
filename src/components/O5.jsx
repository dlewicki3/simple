import React, { useEffect } from 'react';
import './O5.css';
import { CgArrangeBack } from "react-icons/cg";
import { CgCarousel } from "react-icons/cg";
import { CgBriefcase } from "react-icons/cg";
import { CgDigitalocean } from "react-icons/cg";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const O5 = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.pro5',
          { opacity: 0 },
          {  opacity: 1, duration: 1,  ease: 'power2.out', scrollTrigger: { trigger: '.pro5', start: 'top 80%', end: 'bottom center' } }
        );
        gsap.fromTo('.pro55',
          {  opacity: 0 },
          {  opacity: 1, duration: 1,  ease: 'power2.out', scrollTrigger: { trigger: '.pro55', start: 'top 90%', end: 'bottom center' } }
        );
        gsap.fromTo('.pro555',
          {  opacity: 0 },
          { opacity: 1, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: '.pro555', start: 'top 90%', end: 'bottom center' } }
        );
        gsap.fromTo('.pro5555',
        {  opacity: 0 },
        { opacity: 1, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: '.pro5555', start: 'top 90%', end: 'bottom center' } }
      );
      }, []);



      useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo('.pion55',
          { opacity: 0 },
          {  opacity: 1, duration: 1,  ease: 'power2.out', scrollTrigger: { trigger: '.pion55', start: 'top 80%', end: 'bottom center',  } }
        );
        gsap.fromTo('.pion555',
          {  opacity: 0 },
          {  opacity: 1, duration: 1,  ease: 'power2.out', scrollTrigger: { trigger: '.pion555', start: 'top 90%', end: 'bottom center' } }
        );
        gsap.fromTo('.pion5555',
          {  opacity: 0 },
          { opacity: 1, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: '.pion5555', start: 'top 90%', end: 'bottom center' } }
        );
        gsap.fromTo('.pion55555',
        {  opacity: 0 },
        { opacity: 1, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: '.pion55555', start: 'top 90%', end: 'bottom center',  } }
      );
      }, []);



  return (
<div className="o5">
    <div className="k5">
<div className="left5">
    <div className="pin">
        <p className='big-txt5'>Approach</p>
        <br></br>
        <br></br>
        <p className='txt5'>Zypsy uniquely integrates with Seed-to Growth-stage startups in support of their brand and product design needs.</p>
    </div>
</div>
<div className="right5">
    <div className="pion5">
        <div className="pion55"><CgArrangeBack />
</div>
        <div className="pion555"><CgCarousel />
</div>
        <div className="pion5555"><CgBriefcase />
</div>
        <div className="pion55555"><CgDigitalocean />
</div>
    </div>
    <div className="na-pro5">
    <div className="pro5">
        <p className='small-color-txt'>EQUITY ENGAGEMENT
</p>
<br></br>
<p className='middle-txt5'>Shared success
</p>
<br></br>
<p className='txt5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis unde dicta sit dignissimos iusto illum cum totam eligendi necessitatibus est praesentium corporis laudantium sunt minus, quibusdam assumenda veritatis, aperiam explicabo eum ipsam repudiandae vitae! Hic explicabo autem necessitatibus aut dolorem.</p>
    </div>
    <div className="pro55">
    <p className='small-color-txt'>INTEGRATED APPROACH

</p>
<br></br>
<p className='middle-txt5'>Team of integrated product experts

</p>
<br></br>
<p className='txt5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis unde dicta sit dignissimos iusto illum cum totam eligendi necessitatibus est praesentium corporis laudantium sunt minus, </p>
    </div>
    <div className="pro555">
    <p className='small-color-txt'>FOUNDER FOCUSED
</p>
<br></br>
<p className='middle-txt5'>Selective partnership
</p>
<br></br>
<p className='txt5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis unde dicta sit dignissimos iusto illum cum totam eligendi necessitatibus est praesentium corporis laudantium sunt minus Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt perspiciatis a qui cum necessitatibus eaque possimus tempora culpa dolor temporibus?, </p>
    </div>
    <div className="pro5555">
    <p className='small-color-txt'>FOUNDER FOCUSED
</p>
<br></br>
<p className='middle-txt5'>Scalable design support
</p>
<br></br>
<p className='txt5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis unde dicta sit dignissimos iusto illum cum totam eligendi necessitatibus est praesentium corporis laudantium sunt minus</p>
    </div>
    </div>
</div>
    </div>
</div>
  )
}

export default O5