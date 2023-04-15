import React from 'react'

const About = () => {
    return (
        <>
            <div className="aboutWrap">
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
                <button className='aboutPageBTN'> Register </button>
            </div>
        </>
    )
}

export default About