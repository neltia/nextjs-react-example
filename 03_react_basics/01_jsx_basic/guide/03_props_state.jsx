// App.jsx
/*
- Props: 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달하는 방법
- State: 컴포넌트 내부에서 관리하는 데이터로, 변경될 수 있음
- Props는 읽기 전용이며, State는 변경 가능
*/
import { useState } from 'react';

function Title({ text }) {
  return <h2>{text}</h2>;
}

export function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Title text="Counter Example" />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}