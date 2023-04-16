import React from 'react'
import Backtotop from '../img/back to top.svg'
import MailButton from '../component/MailButton'

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footWrap nav-container">
                    <div className="footLeft">
                        <h1 className="footHead"> Menyu </h1>
                        <ul className="footList">
                            <li className="footList1"> <button > Disclaimer </button> </li>
                            <li className="footList2"> <button > FAQ </button> </li>
                            <li className="footList3"> <MailButton label="Feedback" mailto="mailto:no-reply@example.com" /> </li>
                            <li className="footList4"> <MailButton label="Chat with us" mailto="mailto:no-reply@example.com" /> </li>
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
