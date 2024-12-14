import React from "react";

const Header = ({currentDate, changeMonth}) => {
    const monthNames =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
return(
    <div className="calendar-header">
        <button onClick={() => changeMonth(-1)}>&lt;</button>
        <span>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</span>
        <button onClick={()=> changeMonth(1)}>&gt;</button>

    </div>
);


};

export default Header;