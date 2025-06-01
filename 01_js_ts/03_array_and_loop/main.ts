// array_and_loop.ts
// TypeScript에서 배열(Array)과 반복문(loop), 고차 함수(higher-order functions)에 타입을 적용한 예제입니다.

// 1) 배열에 타입 지정
const numbers: number[] = [1, 2, 3, 4, 5];

// 2) for...of 반복문
for (const num of numbers) {
    console.log(`for...of 반복문 - num = ${num}`);
}

// 3) forEach 메서드와 타입 주석
numbers.forEach((num: number, index: number) => {
    console.log(`forEach - index: ${index}, num: ${num}`);
});

// 4) map 메서드: 반환값에 타입을 지정
const doubled: number[] = numbers.map((num: number): number => {
    return num * 2;
});

// 5) filter 메서드: 조건에 맞는 요소만 필터링
const evenNumbers: number[] = numbers.filter((num: number): boolean => {
    return num % 2 === 0;
});

// 6) reduce 메서드: 초기값과 누적 함수(accumulator)에 타입을 지정
const sumOfNumbers: number = numbers.reduce((acc: number, curr: number): number => {
    return acc + curr;
}, 0);

console.log('doubled:', doubled);
console.log('evenNumbers:', evenNumbers);
console.log('sumOfNumbers:', sumOfNumbers);
