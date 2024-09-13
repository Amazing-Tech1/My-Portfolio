import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.png'
import { FaBriefcase } from 'react-icons/fa'
function Hero() {

    return (

        < div id='hero' >
            <div className="hero-left">

                <p>Hi, I'm Kelvin</p>
                <h1>Front-End</h1>
                <h2>Web Developer</h2>
                <span> I am a skilled passionate web designer with experience in creating visually appealing and user-friendly websites</span>
                <button> <FaBriefcase /> Hire me</button>
            </div>
            <div className="hero-right"><img src={hero} alt="" className='hero_img' /></div>

        </div >
    )
}

export default Hero
