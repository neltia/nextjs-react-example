// array_and_loop.js
// JavaScript에서 배열(Array)과 반복문(loop), 그리고 고차 함수(higher-order functions)를 다루는 예제입니다.

// 1) 배열 선언 및 초기화
const numbers = [1, 2, 3, 4, 5];

// 2) 전통적인 for 반복문
for (let i = 0; i < numbers.length; i++) {
    console.log(`for 반복문 - numbers[${i}] = ${numbers[i]}`);
}

// 3) for...of 반복문 (ES6 문법)
for (const num of numbers) {
    console.log(`for...of 반복문 - num = ${num}`);
}

// 4) forEach 메서드: 배열 각 요소에 대해 콜백 함수를 실행
numbers.forEach((num, index) => {
    console.log(`forEach - index: ${index}, num: ${num}`);
});

// 5) map 메서드: 배열 각 요소에 변형 함수를 적용하여 새로운 배열을 생성
const doubled = numbers.map((num) => {
    return num * 2;
});

// 6) filter 메서드: 조건에 맞는 요소만 필터링하여 새로운 배열 생성
const evenNumbers = numbers.filter((num) => num % 2 === 0);

// 7) reduce 메서드: 배열을 하나의 값으로 축약 (예: 합계 구하기)
const sumOfNumbers = numbers.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log('doubled:', doubled);
console.log('evenNumbers:', evenNumbers);
console.log('sumOfNumbers:', sumOfNumbers);
