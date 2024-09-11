import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.png'
import { FaBriefcase } from 'react-icons/fa'

function Hero() {
    return (
        <div id='hero'>
            <div className="hero-content">
                <div className="hero-left">
                    <div className='hi'>
                        <p>Hi</p>
                    </div>
                    <h1>I'm Kelvin <br /> Website Designer</h1>
                    <p className='bio'> I am a skilled passionate web designer with experience in creating visually appealing and user-friendly websites</p>
                    <button> <FaBriefcase /> Hire me</button>
                </div>
                <img src={hero} alt="" className='hero_img' />
            </div>

        </div>
    )
}

export default Hero
