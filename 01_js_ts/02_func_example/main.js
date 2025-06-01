// function_example.js
// JavaScript에서 다양한 함수 선언 방식과 호출 방법을 다루는 예제입니다.

// 1) 전통적인 함수 선언문(Function Declaration)
function add(a, b) {
    // 매개변수 a, b는 숫자 값을 전달받는다고 가정합니다.
    return a + b;
}

// 2) 함수 표현식(Function Expression)과 화살표 함수(Arrow Function)
//    - 함수 표현식: 익명 함수(anonymous function)를 변수에 할당
//    - 화살표 함수: ES6부터 지원되며, this 바인딩, 간결 문법 등이 특징입니다.
const multiply = function(a, b) {
    return a * b;
};

const divide = (a, b) => {
    if (b === 0) {
        throw new Error('나누기 오류: 0으로 나눌 수 없습니다.');
    }
    return a / b;
};

// 3) 즉시 실행 함수(IIFE: Immediately Invoked Function Expression)
//    - 함수를 정의함과 동시에 즉시 호출하는 패턴입니다.
(function() {
    console.log('이것은 즉시 실행 함수(IIFE) 예시입니다.');
})();

// 4) 콜백 함수(Callback Function) 예시
function calculate(a, b, operation) {
    // operation 매개변수에 전달된 함수(Callback)를 호출
    return operation(a, b);
}

// 함수 호출 예시
const sumResult = add(5, 3);                // 전통적 선언 함수 호출
const productResult = multiply(5, 3);       // 함수 표현식 호출
const divisionResult = divide(10, 2);       // 화살표 함수 호출

console.log('add 함수 결과:', sumResult);
console.log('multiply 함수 결과:', productResult);
console.log('divide 함수 결과:', divisionResult);

// 콜백 함수 활용 예시
const callbackResult = calculate(7, 2, (x, y) => x - y); // 화살표 함수를 콜백으로 전달
console.log('calculate 함수 콜백 결과(뺄셈):', callbackResult);
