// App.jsx
/*
- Spread Props: React에서 컴포넌트에 여러 속성을 한 번에 전달하는 방법
- 객체의 속성을 컴포넌트에 전달할 때 유용
- JSX에서 `{...props}` 구문을 사용하여 구현
*/
// import React from 'react';

function Button(props) {
  return <button {...props}>{props.label}</button>;
}

export function App() {
  const config = { label: 'Click', onClick: () => alert('Clicked') };
  return <Button {...config} />;
}