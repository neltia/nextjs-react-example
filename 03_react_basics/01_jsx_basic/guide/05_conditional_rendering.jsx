// App.jsx
/*
- 조건부 렌더링: React에서 조건에 따라 컴포넌트를 렌더링하는 방법
- JavaScript의 조건문을 사용하여 렌더링할 내용을 결정
- 삼항 연산자, 논리 연산자 등을 활용하여 구현 가능
*/
// import React, { useState } from 'react';
import { useState } from 'react';

export function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="App">
      {visible ? <p>Now you see me!</p> : <p>Now you don't!</p>}
      <button onClick={() => setVisible(!visible)}>
        Toggle Visibility
      </button>
    </div>
  );
}