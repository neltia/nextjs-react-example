// 제네릭 함수 예시: 타입에 관계없이 입력값을 반환
function identity<T>(arg: T): T {
  return arg;
}

const num = identity<number>(42);
const strVal = identity<string>('hello');