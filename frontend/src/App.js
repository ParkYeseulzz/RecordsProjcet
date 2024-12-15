import React from 'react';
import MyPage from './components/MyPage/MyPage';  // MyPage 컴포넌트 임포트
import './App.css';  // 전역 스타일 또는 글로벌 CSS 임포트

const App = () => {
  return (
    <div className="App">
      <MyPage />  {/* MyPage 컴포넌트 렌더링 */}
    </div>
  );
};

export default App;
