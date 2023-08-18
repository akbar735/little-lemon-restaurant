import React from "react";
import { useNavigate } from "react-router-dom";
import "./Thankyou.css"
export default function Thankyou(){
    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate('/')
    }
    return(
        <div className="thank-container">
           <h3>Thank You.</h3>
           <h3>Your booking is confirmed</h3>
           <p>
                Please feel free to get in touch with us0n +1332535345, you need any help
           </p>

           <button className="calendar-btn">Add to Calendar</button>
           <button className = "home-btn" onClick={handleOnClick}>Home</button>
        </div>
    )
}