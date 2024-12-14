import React, {useState} from "react";
import Header from './Header';
import MonthView from './MonthView';


const Calendar = () => {
    const [currentDate, setCurrentDate] =useState(new Date());

    const changeMonth = (increment) => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setMonth(newDate.getMonth() + increment);
            return newDate;
        });
    };

    return(
        <div className="calendar">
            <Header currentDate={currentDate} changeMonth={changeMonth}/>
            <MonthView currentDate={currentDate}/>
        </div>
    );


};

export default Calendar;