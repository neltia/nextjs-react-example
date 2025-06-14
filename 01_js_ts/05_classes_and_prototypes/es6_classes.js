// ES6 클래스 문법 예시
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello, ${this.name}`;
  }
}
const p = new Person('moca');
console.log(p.greet());