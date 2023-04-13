import React, { Component } from 'react'
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
                <ul ref={this.itemRef} className="nav-items navItems ham-container">
                    <li className="nav-item1"> <a href="/"> Home </a> </li>
                    <li className="nav-item2"> <a href="/"> Scan QR </a> </li>
                    <li className="nav-item3"> <a href="/"> About Us </a> </li>
                    <li className="nav-item4"> <a href="/"> Register/Login </a> </li>
                </ul>
            </div>
        )
    }
}
