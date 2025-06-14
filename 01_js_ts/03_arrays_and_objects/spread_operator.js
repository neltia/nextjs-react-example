// 전개 연산자(Spread): 배열/객체 복사 및 확장
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 };

console.log(arr2); // [1, 2, 3, 4]
console.log(obj2); // { a: 1, b: 2 }
