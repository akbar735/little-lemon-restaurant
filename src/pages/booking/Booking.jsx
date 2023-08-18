import React from "react";
import { useId } from "react";
import { useNavigate } from "react-router-dom";
import "./Booking.css"
export default function Booking(){
    const dateInput = useId()
    const timeInput = useId()
    const occasionInput = useId()
    const naviagte = useNavigate()

    const handleOnSubmit = (e) => {
        e.preventDefault();
        naviagte('/thankyou')
    }
    return(
        <div className="form-container">
          <h1>Book A Table</h1>
          <form onSubmit={handleOnSubmit}>
             <div>
                <label htmlFor= {dateInput}>Date: </label>
                <input  required name="Date" id={dateInput} type= "date" />
             </div>
             <div>
                <label htmlFor= {timeInput}>Time: </label>
                <input required name="Time" id={timeInput} type= "time" />
             </div>
             <div>
                <label htmlFor={occasionInput}>Occassion: </label>
                <select required name="ocassion" id={occasionInput}>
                    <option value="Birthday Celebration">Birthday Celebration</option>
                    <option value="Marriage Celebration">Marriage Celebration</option>
                    <option value="Get Together">Get Together</option>
                    <option value="other">Other</option>
                </select>
             </div>
             <div>
                <label htmlFor= {timeInput}>Other Instruction: </label>
                <input name="instruction" id={timeInput} type= "text" />
             </div>
             <div>
                <label htmlFor= {timeInput}>Name: </label>
                <input required  name="name" id={timeInput} type= "text" />
             </div>
             <div>
                <label htmlFor= {timeInput}>Name: </label>
                <input required name="name" id={timeInput} type= "text" />
             </div>
             <input className="submit-btn" type="submit" value={'Done'} />
          </form>
        </div>
    )
}