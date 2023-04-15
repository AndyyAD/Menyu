import React from 'react'
import Backtotop from '../img/back to top.svg'

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footWrap nav-container">
                    <div className="footLeft">
                        <h1 className="footHead"> Menyu </h1>
                        <ul className="footList">
                            <li className="footList1"> Disclaimer </li>
                            <li className="footList2"> FAQ </li>
                            <li className="footList3"> Feedback </li>
                            <li className="footList4"> Chat with us </li>
                        </ul>
                    </div>
                    <div className="backtotop"> <a href="#up"> <img src={Backtotop} alt="" /> </a> </div>
                </div>
                <hr />
                <p className="footEnd"> Menyu &nbsp; &copy; &nbsp; Ashish Deb </p>
            </div>
        </>
    )
}
