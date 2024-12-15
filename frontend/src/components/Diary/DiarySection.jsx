import React, { useState } from 'react';

const DiarySection = () => {
  const [diaryText, setDiaryText] = useState('');
  
  const handleChange = (event) => {
    setDiaryText(event.target.value);
  };

  const handleSubmit = () => {
    if (diaryText.trim()) {
      // 일기 저장 로직
      alert('일기가 저장되었습니다!');
      setDiaryText('');  // 텍스트 초기화
    } else {
      alert('일기를 작성해주세요!');
    }
  };

  return (
    <div className="diary-section">
      <h2>일기 쓰기</h2>
      <textarea 
        value={diaryText}
        onChange={handleChange}
        rows="10" 
        placeholder="오늘의 일기를 작성하세요..." 
        className="diary-textarea"
      />
      <button onClick={handleSubmit} className="diary-submit-btn">
        일기 저장
      </button>
    </div>
  );
};

export default DiarySection;
