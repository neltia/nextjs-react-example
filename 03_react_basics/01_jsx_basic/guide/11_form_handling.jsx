// App.jsx
/*
- 폼 핸들링: React에서 폼 데이터를 처리하는 방법
- 폼 요소의 상태를 관리하고, 입력값을 처리하는 방법
- `useState` 훅을 사용하여 입력값의 상태를 관리
*/
// import React, { useState } from 'react';
import { useState } from 'react';

export default function App() {
  // useState 훅을 사용하여 입력값의 상태를 관리
  const [name, setName] = useState('');
  const handleChange = e => setName(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    alert(`Submitted: ${name}`);
  };

  // handleChange 함수는 입력값이 변경될 때마다 호출되어 상태를 업데이트
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={handleChange} placeholder="Enter name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}