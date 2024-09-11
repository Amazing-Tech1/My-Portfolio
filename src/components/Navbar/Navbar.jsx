import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <nav className='navbar'>
            <div className="nav-left">
                Amazing<span>Tech</span>
            </div>
            <div className="nav-middle">
                <ul>
                    <a href="#hero"><li>Home</li></a>
                    <a href="#about"><li>About</li></a>
                    <a href="#portfolio"><li>Portfolio</li></a>
                </ul>
            </div>
            <div className="nav-right">
                <button><a href="#contact">Contact Me</a></button>
            </div>
            <div className='slide-bar' onClick={() => setShowMenu(!showMenu)}>
                {showMenu ? <FaTimes size={30} style={{ cursor: "pointer" }} /> : <FaBars size={35} style={{ cursor: "pointer" }} />}
            </div>
            {showMenu === true ?
                <div className="menu">
                    <ul>
                        <a href="#hero" onClick={() => setShowMenu(false)}><li>Home</li></a>
                        <a href="#about" onClick={() => setShowMenu(false)}><li>About</li></a>
                        <a href="#portfolio" onClick={() => setShowMenu(false)}><li>Portfolio</li></a>
                        <a href="#contact" onClick={() => setShowMenu(false)}><li>Contact me</li></a>
                    </ul>
                </div> : null}

        </nav>
    )
}

export default Navbar
