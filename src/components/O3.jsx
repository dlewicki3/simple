import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './O3.css';
import F1 from '../components/F1.png';
import F2 from '../components/F2.png';
import F3 from '../components/F3.webp';

const O3 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo('.kwa3',
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, scrollTrigger: { trigger: '.kwa3', start: 'top center', end: 'bottom center' } }
    );

    gsap.fromTo('.kwa33',
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, delay: 0.4, scrollTrigger: { trigger: '.kwa33', start: 'top center', end: 'bottom center' } }
    );

    gsap.fromTo('.kwa333',
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, delay: 0.8, scrollTrigger: { trigger: '.kwa333', start: 'top center', end: 'bottom center',
 } }
    );
  }, []);

  return (
    <div className="o3">
      <div className="na-txt3">Zypsy companies</div>
      <div className="k3">
        <div className="kwa3">
          <div className="foto3">
            <img className='fotka3' src={F1} alt="F1" />
            <br />
            <br />
            <p className='small-txt3'>AI</p>
            <br />
            <p className='middle-txt3'>Lorem ipsum dolor sit amet consectetur.</p>
            <div className="na-btn3">
              <button className='btn3'>CHAPTER ONE</button>
              <button className='btn3'>ZYPSY</button>
            </div>
          </div>
        </div>
        <div className="kwa3-display">
        <div className="foto3">
            <img className='fotka3' src={F1} alt="F1" />
            <br />
            <br />
            <p className='small-txt3'>AI</p>
            <br />
            <p className='middle-txt3'>Lorem ipsum dolor sit.</p>
            <div className="na-btn3">
              <button className='btn3'>CHAPTER ONE</button>
              <button className='btn3'>ZYPSY</button>
            </div>
          </div>
        </div>
        <div className="kwa33">
          <div className="foto3">
            <img className='fotka3' src={F2} alt="F2" />
            <br />
            <br />
            <p className='small-txt3'>NASH</p>
            <br />
            <p className='middle-txt3'>Lorem, ipsum dolor.</p>
            <div className="na-btn3">
              <button className='btn3'>CHAPTER ONE</button>
              <button className='btn3'>ZYPSY</button>
            </div>
          </div>
        </div>
<div className="kwa33-display">
<div className="foto3">
            <img className='fotka3' src={F2} alt="F2" />
            <br />
            <br />
            <p className='small-txt3'>NASH</p>
            <br />
            <p className='middle-txt3'>Lorem, ipsum dolor.</p>
            <div className="na-btn3">
              <button className='btn3'>CHAPTER ONE</button>
              <button className='btn3'>ZYPSY</button>
            </div>
          </div>
</div>
        <div className="kwa333">
          <div className="foto3">
            <img className='fotka3' src={F3} alt="F3" />
            <br />
            <br />
            <p className='small-txt3'>PHI</p>
            <br />
            <p className='middle-txt3'>Lorem ipsum dolor sit amet consectetur.</p>
            <div className="na-btn3">
              <button className='btn3'>CHAPTER ONE</button>
              <button className='btn3'>ZYPSY</button>
            </div>
          </div>
</div>
<div className="kwa333-display">
<div className="foto3">
            <img className='fotka3' src={F3} alt="F3" />
            <br />
            <br />
            <p className='small-txt3'>PHI</p>
            <br />
            <p className='middle-txt3'>Lorem ipsum dolor sit amet consectetur.</p>
            <div className="na-btn3">
              <button className='btn3'>CHAPTER ONE</button>
              <button className='btn3'>ZYPSY</button>
            </div>
          </div>




        </div>
      </div>
    </div>
  );
};

export default O3;
