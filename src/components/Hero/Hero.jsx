import React, { useEffect, useRef } from 'react'
import './Hero.css'
import hero from '../../assets/hero.png'
import { FaBriefcase } from 'react-icons/fa'
import Typed from 'typed.js'


function Hero() {
    const el1 = useRef(null)
    const el2 = useRef(null)
    const el3 = useRef(null)
    const el4 = useRef(null)

    useEffect(() => {
        const typed1 = new Typed(el1.current, {
            strings: ['Hello, I am Kelvin'],
            typeSpeed: 100,
            showCursor: false,
            onComplete: () => {
                const typed2 = new Typed(el2.current, {
                    strings: ['Front-End'],
                    typeSpeed: 200,
                    backSpeed: 100,
                    backDelay: 1000,
                    loop: true,
                    startDelay: 1000,
                    onComplete: () => {
                        const typed3 = new Typed(el3.current, {
                            strings: ['Web Developer'],
                            showCursor: false,
                            onComplete: () => {
                                const typed4 = new Typed(el4.current, {
                                    strings: ['I am a skilled passionate web designer with experience in creating visually appealing and user-friendly websites'],
                                    typeSpeed: 30,
                                    showCursor: false,
                                })
                            },
                            showCursor: false,
                        })
                    },
                    showCursor: false,
                })
            },
            showCursor: false,
        });

        return () => {
            typed1.destroy()
        }

    }, [])

    return (

        < div id='hero' >
            <div className="hero-left">
                <p ref={el1}></p>
                <h1 ref={el2}></h1>
                <h2 ref={el3}></h2>
                <span ref={el4}> </span>
                <button> <FaBriefcase /> Hire me</button>
            </div>
            <div className="hero-right"><img src={hero} alt="" className='hero_img' /></div>

        </div >
    )
}

export default Hero
