// 프로토타입 기반 정의 예시
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return 'Hi, ' + this.name;
};

const p2 = new Person('moca');
console.log(p2.greet());