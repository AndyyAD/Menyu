import React, { useState } from 'react'

const Register = () => {

    const [reg, setreg] = useState({
        name: "", email: "", restaurantname: "", restaurantdesc: "", tableno: "", foodtype: "", menu: ""
    });

    let name, value;

    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;

        setreg({ ...reg, [name]: value });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/', {
            method: "POST",
            body: JSON.stringify(reg),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        const data = await response.json();
        console.log(data);
        alert("Form Submitted Successfully")
    }

    return (
        <>
            <div className="regWrap" id="up">
                <div className="formWrap">
                    <h1 className="regHEAD"> Register </h1>
                    <form className='regForm' onSubmit={handleSubmit}>

                        <label htmlFor="name"> Name: </label> <br />
                        <input type="text" name="name" id="name" className="inputarea" placeholder="Enter your name" required
                            value={reg.name}
                            onChange={handleInput}
                        /> <br /> <br />

                        <label htmlFor="email"> Email: </label> <br />
                        <input type="email" name="email" id="email" className="inputarea" placeholder="Enter your email" required
                            value={reg.email}
                            onChange={handleInput}
                        /> <br /> <br />

                        <label htmlFor="restaurantname"> Restaurant Name: </label> <br />
                        <input type="text" name="restaurantname" id="restaurantname" className="inputarea" placeholder="Enter your Restaurant name" required
                            value={reg.restaurantname}
                            onChange={handleInput}
                        /> <br /> <br />

                        <label htmlFor="restaurantdesc"> Restaurant Description: </label> <br />
                        <textarea name="restaurantdesc" id="restaurantdesc" cols="30" rows="10" className="inputarea" placeholder="Give a brief on your restaurant" required
                            value={reg.restaurantdesc}
                            onChange={handleInput}
                        ></textarea> <br /> <br />

                        <label htmlFor="tableno"> No of tables: </label> <br />
                        <input type="number" name="tableno" id="tableno" className="inputarea" placeholder="Enter the no of tables" required
                            value={reg.tableno}
                            onChange={handleInput}
                        /> <br /> <br />

                        <label htmlFor="foodtype"> Enter type of food serve </label> <br />
                        <input type="text" name="foodtype" id="foodtype" className="inputarea" placeholder="Vegetarian, Non-vegetarian or Both" required
                            value={reg.foodtype}
                            onChange={handleInput}
                        /> <br /> <br />

                        <label htmlFor="menu"> Enter all your menu items along with prices: </label> <br />
                        <textarea name="menu" id="menu" cols="30" rows="10" className="inputarea" placeholder="eg: Butter Chicken Full: Rs 400" required
                            value={reg.menu}
                            onChange={handleInput}
                        ></textarea> <br /> <br />

                        <button type="submit" className="regBTN"> Submit </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register