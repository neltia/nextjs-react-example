let username: string = 'moca';
let age: number = 28;
const isDeveloper: boolean = true;

// Union 타입: 여러 타입을 허용할 때 사용합니다.
let value: number | string;
value = 10;
value = 'ten';

console.log(`Username: ${username}, Age: ${age}, Is Developer: ${isDeveloper}`);
