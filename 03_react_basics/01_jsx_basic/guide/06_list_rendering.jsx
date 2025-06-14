// App.jsx
/*
- 리스트 렌더링: React에서 배열 데이터를 기반으로 컴포넌트를 반복적으로 렌더링하는 방법
- `map()` 함수를 사용하여 배열의 각 요소를 JSX로 변환
- 각 요소에 고유한 `key` 속성을 부여하여 React가 효율적으로 업데이트할 수 있도록 함
*/
export function App() {
  const items = ['Apple', 'Banana', 'Cherry'];

  return (
    <div className="App">
        <ul>
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        </ul>
    </div>
  );
}