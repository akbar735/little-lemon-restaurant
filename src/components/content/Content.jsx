import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import About from "../../pages/aboute/About";
import Booking from "../../pages/booking/Booking";
import Thankyou from "../../pages/thankyou/Thnakyou";
import PageNotFound from "../../pages/nopage/PageNotFound";
export default function Content(){
    return(
        <div className="content">
            <Routes>
                <Route path="/" index element = {<Home />} />
                <Route path="/about" element= {<About />}/>
                <Route path="/booking" element = {<Booking />}/>
                <Route path="/thankyou" element ={<Thankyou />}/>
                <Route path="*" element= {<PageNotFound />}/>
            </Routes>
        </div>
    )
}