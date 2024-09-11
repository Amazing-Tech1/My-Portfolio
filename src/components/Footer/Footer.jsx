import React from 'react'
import './Footer.css'
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa'

function Footer() {

    return (
        <footer className='footer'>
            <div className="logo">
                <a href="https://www.facebook.com/kelvinmakinde" target='_blank'><span><FaFacebookF size={40} style={{ color: "#4267B2" }} /></span></a>
                <a href="https://www.instagram.com/kelvinmakinde" target='_blank'><span><FaInstagram size={40} style={{ color: "E1306C" }} /></span></a>
                <a href="https://www.X.com/kelvin28383121" target='_blank'><span><FaTwitter size={40} style={{ color: "#IDAIF2" }} /></span></a>
                <a href="https://www.github.com/Amazing-Tech1" target='_blank'><span><FaGithub size={40} style={{ color: "#IDAIF2" }} /></span></a>
            </div>
            <p><a href="#">Back to Top</a></p>
            <hr />
            <p>Copyright &copy; 2024 Amazing-Tech. All right reserved</p>
        </footer>
    )
}

export default Footer
