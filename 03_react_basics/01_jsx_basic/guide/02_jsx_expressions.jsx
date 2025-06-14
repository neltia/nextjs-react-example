// JSX 표현식 예시
// - JSX 표현식은 중괄호 `{}` 안에 JavaScript 표현식을 넣을 수 있음
// - 변수, 수식, 함수 호출 결과 등 포함 가능
const user = { name: 'moca' };
function formatName(u) { return u.name.toUpperCase(); }

export function App() {
  return (
    <div className="App">
      <h2>{formatName(user)}</h2>
      <p>{1 + 2}는 연산 예시</p>
      <p>{['a','b','c'].join(',')}</p>
    </div>
  );
}