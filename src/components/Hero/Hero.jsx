import React, { useEffect, useRef } from 'react';
import './Hero.css';
import hero from '../../assets/hero.png';
import { FaBriefcase } from 'react-icons/fa';
import cv  from '../../assets/kelvin-Resume.pdf'
import Typed from 'typed.js';

function Hero() {
    const el = useRef(null);

    useEffect(() => {
        const options = {
            strings: ['Web Developer', 'React Developer'], // Typed strings
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 1000,
            loop: true,
            showCursor: false,
        };

        const typed = new Typed(el.current, options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div id='hero'>
            <div className="hero-left">
                <h1>Hello,</h1>
                <h2>I am Kelvin</h2>
                <p ref={el}></p>
                <span>I am a skilled passionate web designer with experience in creating visually appealing and user-friendly websites.</span>
                <a href={cv} download><button><FaBriefcase /> My Resume</button></a>

            </div>
            
            <div className="hero-right">
                <img src={hero} alt="Hero" className='hero_img' />
            </div>
        </div>
    );
}

export default Hero;