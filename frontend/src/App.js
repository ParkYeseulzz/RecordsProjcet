import React from 'react';
import Calendar from './components/Calendar/Calendar';
import './styles/calendar.css'; 
const App = () => {
  return (
    <div className="app">
      <h1>My Calendar</h1>
      <Calendar />
    </div>
  );
}

export default App;
