// App.jsx
/*
- React Fragments: 여러 요소를 그룹화할 때 사용
- 불필요한 DOM 요소를 생성하지 않고, 여러 자식 요소를 반환할 수 있음
- `<React.Fragment>` 또는 빈 태그 `<>`를 사용하여 구현
*/
// import React from 'react';

export function App() {
  return (
    <>
    <div className="App">
      <h1>Title</h1>
      <p>Description</p>
    </div>
    </>
  );
}