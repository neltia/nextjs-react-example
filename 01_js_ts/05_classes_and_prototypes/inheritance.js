// 클래스 상속 예시
class Animal {
  constructor(type) {
    this.type = type;
  }
}

class Dog extends Animal {
  constructor(name) {
    super('dog');
    this.name = name;
  }
  bark() {
    return 'woof';
  }
}

const d = new Dog('Buddy');
console.log(d.type, d.name, d.bark());