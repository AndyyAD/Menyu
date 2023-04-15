import React from 'react'

const Register = () => {
    return (
        <>
            <div className="regWrap" id="up">
                <div className="formWrap">
                    <h1 className="regHEAD"> Register </h1>
                    <form action="" method="post" className='regForm'>
                        <label htmlFor="name"> Name: </label> <br />
                        <input type="text" name="name" id="name" className="inputarea" /> <br /> <br />

                        <label htmlFor="email"> Email: </label> <br />
                        <input type="email" name="email" id="email" className="inputarea" /> <br /> <br />

                        <label htmlFor="restName"> Restaurant Name: </label> <br />
                        <input type="text" name="restName" id="restName" className="inputarea" /> <br /> <br />

                        <label htmlFor="restDesc"> Restaurant Description: </label> <br />
                        <textarea name="restDesc" id="restDesc" cols="30" rows="10" className="inputarea"></textarea> <br /> <br />

                        <label htmlFor=""> Food Types served: </label> <br />
                        <input type="checkbox" name="vegFood" id="vegFood" />
                        <label htmlFor="vegFood" className="veg"> Vegetarian </label>
                        <input type="checkbox" name="non-vegFood" id="non-vegFood" />
                        <label htmlFor="non-vegFood"> Non-Vegetarian </label> <br /> <br />

                        <label htmlFor="menuImg"> Upload an Image of your current Menu: </label> <br />
                        <input type="file" name="menuImg" id="menuImg" accept="image/*"/> <br />

                        <button type="submit" className="regBTN"> Submit </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register