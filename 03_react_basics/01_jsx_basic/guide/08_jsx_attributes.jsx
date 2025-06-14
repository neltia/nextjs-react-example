// App.jsx
/*
- JSX 속성: React 컴포넌트에 속성을 전달하는 방법
- HTML 속성과 유사하게 camelCase로 작성
- 문자열, 숫자, 객체 등 다양한 타입의 값을 속성으로 전달 가능
- 스타일 속성은 객체 형태로 전달하며, CSS 속성 이름은 camelCase로 작성
*/

// import React from 'react';

export function App() {
  const style = { color: 'teal', padding: '10px' };

  // JSX 속성은 HTML 속성과 유사하게 camelCase로 작성
  return (
    <div>
      <label htmlFor="input">Name:</label>
      <input id="input" className="input" style={style} />
    </div>
  );
}