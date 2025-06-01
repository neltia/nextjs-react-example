// function_example.ts
// TypeScript에서 함수 선언 시 타입 주석 및 고급 기능을 다루는 예제

// 1) 함수 시그니처(Function Signature)에 타입 주석 추가
function add(a: number, b: number): number {
    return a + b;
}

// 2) 화살표 함수(Arrow Function)에 타입 주석 추가
const multiply = (a: number, b: number): number => {
    return a * b;
};

// 3) 옵셔널(optional) 매개변수 예시: 매개변수 뒤에 ?를 붙여서 선택적 전달이 가능하도록 함
function greet(name: string, greeting?: string): string {
    // greeting 값이 undefined인 경우 'Hello'를 기본값으로 사용
    const greetText = greeting ?? 'Hello';
    return `${greetText}, ${name}!`;
}

// 4) 기본(default) 매개변수 예시
function exponentiate(base: number, exponent: number = 2): number {
    return Math.pow(base, exponent);
}

// 5) 함수 타입 별칭(Function Type Alias) 예시
type MathOp = (x: number, y: number) => number;

const subtract: MathOp = (x, y) => x - y;

// 6) Rest 파라미터(Rest Parameters) 예시
function sumAll(...nums: number[]): number {
    return nums.reduce((acc, cur) => acc + cur, 0);
}

// 함수 호출 예시
const sumResult: number = add(10, 20);
const productResult: number = multiply(5, 4);
const greetingMessage: string = greet('Alice');          // greeting 생략 시 'Hello' 사용
const exponentResult: number = exponentiate(3);         // exponent 생략 시 2제곱
const subtractionResult: number = subtract(9, 5);
const sumAllResult: number = sumAll(1, 2, 3, 4, 5);

console.log('add 함수 결과:', sumResult);
console.log('multiply 함수 결과:', productResult);
console.log('greet 함수 결과:', greetingMessage);
console.log('exponentiate 함수 결과:', exponentResult);
console.log('subtract 함수 결과:', subtractionResult);
console.log('sumAll 함수 결과:', sumAllResult);
