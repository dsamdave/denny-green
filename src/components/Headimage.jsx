import React from 'react'
import headimage from '../images/Headimage.png';

console.log(headimage)

const Headimage = () => {
    return (
        <div className="div">
           <img src={headimage} className="img" /> 
           <div className="Hometext">
           <div className="Headtext">Give Your Child A <br /> Chance To Be Unique</div>
           <p>Experts agree that a child’s personality doesn’t fully form <br/> until they are in elementary school. <br/><span> Sign in </span>to enroll your child</p>
           <button className="sign-up"> Sign Up</button>
           <button className="learn-more"> Learn more</button>
           </div>
        </div>
    )
}

export default Headimage
