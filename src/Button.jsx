import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import arrow from './assests/Arrow.svg'


const Button = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    gsap.set(textElement, { x: 0 });

    textElement.addEventListener('mouseenter', () => {
      gsap.to(textElement, {
        duration: 0.25,
        x: 5,
        filter: 'blur(0.75px)',
        ease: 'power3.out',
        yoyo: true,
        repeat: 1,
      });
    });

    return () => {
      textElement.removeEventListener('mouseenter', null);
    };
  }, []);

  return (
    <div className='text-2xl bg-black text-white flex  justify-center'>
      <button
        className='bg-purple-600 text-white px-14 py-2 rounded-xl'

      >
        <div
          className='flex gap-2'
          ref={textRef}
        >
          <p>
            Get Started
          </p>
          <img src={arrow} />

        </div>
      </button>
    </div>
  )
}

export default Button