import React from 'react'
import Backtotop from '../img/back to top.svg'
import Feedback from './Feedback'
import Disclaimer from './Disclaimer'
import Faq from './Faq'
import { useNavigate, Routes, Route } from 'react-router-dom'

export default function Footer() {
    const navigate = useNavigate();

    const openDis = () => {
        navigate('/disclaimer');
    }

    const openFaq = () => {
        navigate('/faq');
    }

    const openFeed = () => {
        navigate('/feedback');
    }


    return (
        <>
            <Routes>
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/faq" element={<Faq />} />
            </Routes>
            <div className="footer">
                <div className="footWrap nav-container">
                    <div className="footLeft">
                        <h1 className="footHead"> Menyu </h1>
                        <ul className="footList">
                            <li className="footList1"> <button onClick={openDis}> Disclaimer </button> </li>
                            <li className="footList2"> <button onClick={openFaq}> FAQ </button> </li>
                            <li className="footList3"> <button onClick={openFeed}> Feedback </button> </li>
                            <li className="footList4"> <button > Chat with us </button> </li>
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
