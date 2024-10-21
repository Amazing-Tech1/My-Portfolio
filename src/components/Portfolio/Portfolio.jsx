import React from 'react'
import './Portfolio.css'
import check_list from '../../assets/check-list.png'
import weather_app from '../../assets/weather-app.png'
import cart_app from '../../assets/cart_app.png'
import delivery_app from '../../assets/Delivery_app.png'
import youtube_clone from '../../assets/youtube-clone.png'

function Portfolio() {
    return (
        <section id='portfolio'>
            <h1>My Portfolio</h1>
            <p
                data-aos="zoom-out"
                data-aos-duration="2000"
            >I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. i am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence</p>
            <i>Here are some screenshots of my projects: </i>
            <div className="works"
                data-aos="flip-right"
                data-aos-duration="2000" >
                <div className="work">
                    <img src={check_list} alt="" />
                    <h2>Check-List app</h2>

                </div>
                <div className="work">
                    <img src={weather_app} alt="" />
                    <h2>Weather App </h2>
                </div>
                <div className="work">
                    <img src={cart_app} alt="" />
                    <h2>E-commerce app</h2>
                </div>
                <div className="work">
                    <img src={delivery_app} alt="" />
                    <h2>Delivery app</h2>
                </div>
                <div className="work">
                    <img src={youtube_clone} alt="" />
                    <h2>Delivery app</h2>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
