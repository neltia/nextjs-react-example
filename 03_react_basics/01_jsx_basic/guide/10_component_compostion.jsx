// App.jsx
/*
- 컴포넌트 조합: React에서 컴포넌트를 조합하여 더 복잡한 UI를 구성하는 방법
- 컴포넌트는 다른 컴포넌트를 포함할 수 있으며, 이를 통해 UI를 계층적으로 구성
- 컴포넌트 조합은 재사용성과 유지보수성을 높이는 데 기여
*/
// import React from 'react';

function Header() {
  return <h1>App Header</h1>;
}
function Content() {
  return <p>This is content.</p>;
}

export function App() {
  return (
    <div className='App'>
      <Header />
      <Content />
    </div>
  );
}