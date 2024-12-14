import React from 'react';

const Day = ({ day }) => {
  return (
    <div className="day">
      {day.getDate()}
    </div>
  );
};

export default Day;
