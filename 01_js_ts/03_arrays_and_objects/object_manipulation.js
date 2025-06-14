// 객체 복사 및 속성 변경 예시
const original = { a: 1, b: 2 };
const clone = Object.assign({}, original);  // 얕은 복사
clone.b = 3;
console.log(original, clone);