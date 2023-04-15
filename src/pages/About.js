import React from 'react'
import Register from './Register'
import { Routes, useNavigate, Route } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();

	const openReg = () => {
		navigate('/register');
	}
    return (
        <>
            <div className="aboutWrap" id="up">
                <h1 className="aboutHEAD"> About Us... </h1>
                <p className="aboutTEXT">
                    Have you ever kept waiting for a waiter to take your order at restaurant? <br />
                    or <br />
                    As a restaurant owner, do you want to serve your customer better and manage <br />
                    orders better. <br />
                    <br />
                    Well, here we are. <br />
                    Menyu is the perfect place to solve your problems. <br />
                    <br />
                    Register your restaurant by clicking below and fill out the form. <br/>
                    <br/>
                    We will develop a customize menu for you and send a QR <br/>
                    on your Email so that your menu can be accessed from the table. <br />
                </p>
                <button className='aboutPageBTN' onClick={openReg}> Register </button>
                <Routes>
						<Route path='/register' element={<Register/>}/>
					</Routes>
            </div>
        </>
    )
}

export default About