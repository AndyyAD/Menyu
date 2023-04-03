import React from 'react'
import InstaLogo from '../img/insta.svg'
import Hamburger from './Hamburger-menu'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-wrap nav-container">
                <Hamburger/>
                <a href="/"> <h1 className="logo"> Menyu </h1> </a>
                <div className="insta">
                    <a href="/"> <img src={InstaLogo} alt="Instagram Logo"/> </a>
                </div>
            </div>
        </nav>
    )
}
