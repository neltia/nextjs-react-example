// variable_declaration.ts
// 이 파일은 TypeScript에서 타입 주석(type annotation)을 포함하여 변수 선언을 다루는 예제입니다.
// 1) 타입 주석을 사용한 변수 선언 (Type Annotation)
//    - 변수명: 현대적인 let/const 사용을 권장합니다.
//    - 변수 선언 시 반드시 타입을 명시하거나, TypeScript가 타입을 추론하도록 할 수 있습니다.
// 문자열(string) 타입 변수 선언
var modern_variable = 'I am a string variable';
// 숫자(number) 타입 변수 선언
var numeric_variable = 42;
// 불리언(boolean) 타입 변수 선언
var boolean_variable = true;
// 2) 타입 추론(Type Inference) 예시
//    - 초기화 시 값이 명확하므로, TypeScript가 타입을 자동으로 추론합니다.
var inferred_variable = 'TS infers me as string';
var inferred_number = 3.14; // number 타입으로 추론
// 화면에 출력
console.log('modern_variable:', modern_variable);
console.log('numeric_variable:', numeric_variable);
console.log('boolean_variable:', boolean_variable);
console.log('inferred_variable:', inferred_variable);
console.log('inferred_number:', inferred_number);
// -------------------------------------------------------------
// 3) 재할당 및 타입 오류 예시
numeric_variable = 100; // 정상: number -> number
console.log('numeric_variable (after reassignment):', numeric_variable);
// 아래 구문을 주석 해제하면 TS 컴파일 단계에서 에러가 발생합니다.
// modern_variable = 123; // 오류: string 타입 변수에 number 할당 불가능
// -------------------------------------------------------------
// 4) 여러 가지 타입 선언 예시
// 배열: number 배열 선언
var numbers_array = [1, 2, 3];
// 튜플(Tuple) 예시: 고정된 순서와 타입을 갖는 배열
var tuple_example = ['mokha', 2025];
// 열거형(Enum) 예시: 숫자 기반 열거형
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var myRole = Role.ADMIN;
console.log('numbers_array:', numbers_array);
console.log('tuple_example:', tuple_example);
console.log('myRole (enum):', Role[myRole]); // ADMIN
// TypeScript 설치와 ts-node가 필요합니다. (전역 또는 프로젝트에 설치)
// - 설치 예시
// npm install -g typescript ts-node
// - 컴파일 후 node로 실행
// tsc variable_declaration.ts
// node variable_declaration.js
// - 또는 ts-node로 바로 실행
// ts-node variable_declaration.ts
