import React from 'react'
import './About.css'
import about from '../../assets/about.jpg'

function About() {
    return (
        <section id='about'>
            <h1> About Me</h1>
            <div className="about_content" >
                <div className="about_left"
                    data-aos="fade-right"
                    data-aos-duration="2000">
                    <img src={about} alt="" />
                </div>
                <div className="about_right"
                    data-aos="fade"
                    data-aos-duration="2000"
                >
                    <p>Name: <span>Makinde Kelvin</span> </p>
                    <p>Bio: <span>A seasoned web developer who is passionate in creating a visually appealing and user-friendly websites and when i'm not coding, you find exploring websites to learn new ideas and innovations</span></p>
                    <p>Nationality <span>Nigerian</span> </p>
                    <p>Qualifications <span>B.Tech Human Anatomy</span> </p>
                </div>
            </div>
            <div className="skills"
              data-aos="zoom-in"
                    data-aos-duration="2000"
            >
                <h2>Skills and Expertise</h2>
                <div className="skill_bar">
                    <span>HTML/CSS</span>
                    <div className="fill-container"> <div className="fill" style={{ width: "90%" }}></div>
                    </div>
                </div>
                <div className="skill_bar">
                    <span>JavaScript</span>
                    <div className="fill-container"> <div className="fill" style={{ width: "65%" }}></div></div>

                </div>
                <div className="skill_bar">
                    <span>React</span>
                    <div className="fill-container"><div className="fill" style={{ width: "80%" }}></div></div>

                </div>
                <div className="skill_bar">
                    <span>Node.js</span>
                    <div className="fill-container" >
                        <div className="fill" style={{ width: "10%" }}></div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About
