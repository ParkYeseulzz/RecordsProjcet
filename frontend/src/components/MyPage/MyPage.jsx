import React from 'react';
import DiarySection from '../Diary/DiarySection';  // 경로 확인
import CalendarSection from '../Calendar/CalendarSection';
import './myPage.css';  

const MyPage = () => {
  return (
    <div className="mypage">
      <h1>예슬이 기록보관소</h1>
      <DiarySection />
      <CalendarSection />
    </div>
  );
};

export default MyPage;
