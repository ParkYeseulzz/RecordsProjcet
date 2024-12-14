import React from 'react';
import Day from './Day';

const MonthView = ({ currentDate }) => {
  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  
  const daysInMonth = [];
  for (let i = startOfMonth.getDate(); i <= endOfMonth.getDate(); i++) {
    const day = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
    daysInMonth.push(day);
  }

  const weeks = [];
  let week = [];
  daysInMonth.forEach((day, index) => {
    if (day.getDay() === 0 && week.length) {
      weeks.push(week);
      week = [];
    }
    week.push(day);
  });
  if (week.length) {
    weeks.push(week);
  }

  return (
    <div className="month-view">
      {weeks.map((week, index) => (
        <div key={index} className="week">
          {week.map((day, i) => (
            <Day key={i} day={day} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MonthView;
