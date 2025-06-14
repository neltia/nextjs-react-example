// 고차 함수(Higher-Order Function): 함수를 인자로 받거나 함수를 반환하는 함수
// map: 배열의 각 요소에 함수를 적용하여 새로운 배열을 반환
// filter: 배열의 각 요소에 함수를 적용하여 조건을 만족하는 요소들로 새로운 배열을 반환
// reduce: 배열의 각 요소를 누적하여 단일 값을 반환
const nums = [1, 2, 3, 4];
const doubled = nums.map(n => n * 2);
const evens = nums.filter(n => n % 2 === 0);
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log(doubled, evens, sum);