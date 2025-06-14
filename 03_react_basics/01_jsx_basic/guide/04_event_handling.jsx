// App.jsx
/*
- 이벤트 핸들링: React에서 이벤트를 처리하는 방법
- JSX에서 이벤트는 camelCase로 작성하며, 함수로 처리
- 이벤트 핸들러는 함수로 정의하고, JSX에서 해당 함수를 참조
*/
// import React from 'react';

export function App() {
  function handleClick() {
    console.log('Button clicked!');
  }

  return (
    <div className="App">
        <button onClick={handleClick}>Click Me</button>
    </div>
  );
}