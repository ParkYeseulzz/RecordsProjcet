import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarSection = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [newEvent, setNewEvent] = useState('');

  const handleDateChange = (newDate) => {
    setDate(newDate); // 날짜를 변경하면 새로운 날짜를 상태에 저장
  };

  const handleEventChange = (event) => {
    setNewEvent(event.target.value); // textArea에서 입력된 값을 상태에 저장
  };

  const handleAddEvent = () => {
    const dateKey = date.toDateString(); // 선택된 날짜를 문자열로 변환
    if (newEvent.trim()) {
      setEvents({
        ...events,
        [dateKey]: [...(events[dateKey] || []), newEvent], // 새로운 일정을 기존 이벤트 목록에 추가
      });
      setNewEvent('');  // 일정을 추가 후 입력 필드 초기화
    } else {
      alert('일정을 입력해주세요!');
    }
  };

  // 날짜에 점을 표시하는 함수
  const tileContent = ({ date, view }) => {
    const dateKey = date.toDateString(); // 날짜를 문자열로 변환
    if (events[dateKey]) {
      return <div className="event-dot"></div>; // 일정이 있는 날짜에 점을 표시
    }
    return null; // 일정이 없으면 null을 반환
  };

  return (
    <div className="calendar-section">
      <h2>일정 관리</h2>
      <Calendar 
        onChange={handleDateChange} 
        value={date}
        tileContent={tileContent} // tileContent를 추가하여 점 표시
      />
      
      <div className="event-input">
        <textarea
          value={newEvent}
          onChange={handleEventChange}
          rows="3"
          placeholder="일정을 입력하세요..."
        />
        <button onClick={handleAddEvent}>일정 추가</button>
      </div>

      <div className="event-list">
        <h3>{date.toDateString()}의 일정</h3>
        <ul>
          {(events[date.toDateString()] || []).map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CalendarSection;
