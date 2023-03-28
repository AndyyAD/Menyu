import React from 'react'
import InstaLogo from '../img/insta.svg'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-wrap nav-container">
                <div className="ham-menu">
                    <div className="ham-menu">
                        <span className="ham1"> </span>
                        <span className="ham2"> </span>
                        <span className="ham3"> </span>
                    </div>
                    <ul className="nav-items">
                        <li className="nav-item1"> <a href="/"> Home </a> </li>
                        <li className="nav-item2"> <a href="/"> Scan QR </a> </li>
                        <li className="nav-item3"> <a href="/"> About Us </a> </li>
                        <li className="nav-item4"> <a href="/"> Register </a> </li>
                    </ul>
                </div>
                <a href="/"> <h1 className="logo"> Menyu </h1> </a>
                <div className="insta">
                    <a href="/"> <img src={InstaLogo} alt="Instagram Logo"/> </a>
                </div>
            </div>
        </nav>
    )
}
