// Tuple: 고정된 길이와 타입 순서를 갖는 배열
let tuple: [string, number];
tuple = ['hello', 5];

// Enum: 이름이 있는 숫자 상수 집합
enum Color { Red, Green, Blue }
let c: Color = Color.Green;

// Literal types: 특정 문자열만 허용할 때 사용
type Direction = 'up' | 'down' | 'left' | 'right';
let dir: Direction;
dir = 'up';

// Any type
let randomValue: any;
randomValue = 10; // number
randomValue = 'hello'; // string
randomValue = true; // boolean

// Void type
function logMessage(message: string): void {
    console.log(message);
}

logMessage('This is a log message.');
