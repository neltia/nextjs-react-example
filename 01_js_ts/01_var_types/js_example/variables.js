// var vs let vs const
var x = 1;
let y = 2;
const z = 3;
console.log(x)
console.log(y)
console.log(z)

// 호이스팅 예시
// - var는 호이스팅이 발생하여 선언 전에 접근할 수 있지만, 값은 undefined로 초기화
console.log(a); // undefined
var a = 5;

// - let과 const는 호이스팅이 발생하지 않으며, 선언 전에 접근하면 ReferenceError가 발생
console.log(b)
let b;
console.log(b)

// node variables.js
/*
1
2
3
undefined
ReferenceError
*/
