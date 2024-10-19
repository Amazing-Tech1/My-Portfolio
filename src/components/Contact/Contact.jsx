import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { RiMailLine, RiPhoneLine, RiMapPinLine } from 'react-icons/ri'
import url from '../../assets/url.jpg'
import { toast } from "react-toastify";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_k3b0w3t', 'template_rz44kyl', form.current, {
            publicKey: 'LR6iMnt9axgX2LAEZ',
        })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success("Email sent Successfully")
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error("Email not sent! pls try again")
                },
            );
    };
    return (
        <section id='contact'>
            <h1>Contact me</h1>
            <div className="contact-container">
                <div className="contact-left"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                >
                    <h2>Let's talk</h2>
                    <p>I'm currently available to take on new projects especially on the front end development, so feel free to send a message about anything that you want to work on</p>
                    <div className="contact-details">
                        <img src={url} alt="" />
                        <div className='detail-container'>
                            <div className="contact-detail">
                                <RiMailLine size={20} />
                                <span>kelvinmakinde2@gmail.com</span>
                            </div>
                            <div className="contact-detail">
                                <RiPhoneLine size={20} />
                                <span>+2349065273201</span>
                            </div>
                            <div className="contact-detail">
                                <RiMapPinLine size={20} />
                                <span>Ilorin, Kwara State Nigeria</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-right"
                    data-aos="fade-left"
                    data-aos-duration="2000">
                    <form ref={form} onSubmit={sendEmail}>
                        <label htmlFor="name"> Your Name</label>
                        <input type="text" id='name' placeholder='Enter your name' name="your_name" required />
                        <label htmlFor="email"> Your Email</label>
                        <input type="email" id='email' placeholder='Enter your email' name="your_email" required />
                        <label htmlFor="message"> Type your message here</label>
                        <textarea name="message" id="message" rows="8" placeholder='Input your message' required></textarea>
                        <button type='submit' value="Send">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
