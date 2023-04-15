import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from '../pages/About'
import Register from '../pages/Register'
import '../App.css'

export default class Hamburger extends Component {
    constructor(props) {
        super(props)
        this.crossRef = React.createRef()
        this.itemRef = React.createRef()
    }

    handleClick() {
        const hamLines = this.crossRef.current
        const navItems = this.itemRef.current
        hamLines.classList.toggle('active')
        navItems.classList.toggle('active')
    }

    render() {
        return (
            <div className="ham-menu">
                <div ref={this.crossRef} className="ham-lines hamLines" onClick={() => this.handleClick()}>
                    <span className="ham-line"> </span>
                    <span className="ham-line"> </span>
                    <span className="ham-line"> </span>
                </div>
                <BrowserRouter>
                    <ul ref={this.itemRef} className="nav-items navItems ham-container">
                        <li className="nav-item1"> <Link to="/"> Home </Link> </li>
                        <li className="nav-item2"> <Link to="/"> QR Scan </Link> </li>
                        <li className="nav-item3"> <Link to="/about"> About Us </Link> </li>
                        <li className="nav-item4"> <Link to="/register"> Register </Link> </li>
                    </ul>

                    <Routes>
                        <Route path="/" />
                        <Route path="/about" element={<About />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}
