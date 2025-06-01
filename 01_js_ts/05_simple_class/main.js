// simple_class.js
// JavaScript(ES6) 클래스(Class) 선언 및 인스턴스 생성 예제입니다.

// 1) 클래스를 선언하는 방식
class Person {
    constructor(name, age) {
        // 생성자(Constructor): 객체를 생성할 때 호출되며, this 키워드를 통해 속성(property)을 초기화
        this.name = name;
        this.age = age;
    }

    // 2) 클래스 메서드(Method) 정의
    introduce() {
        // 템플릿 문자열을 사용하여 가독성 향상
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// 3) 인스턴스 생성(Instantiation)
const person1 = new Person('Alice', 30);
console.log(person1.introduce());

// 4) 클래스 상속(Inheritance) 예시
class Employee extends Person {
    constructor(name, age, position) {
        // super(...)를 호출하여 부모 클래스(Person)의 생성자를 실행
        super(name, age);
        this.position = position;
    }

    // 부모 클래스 메서드를 오버라이드(Override)
    introduce() {
        return `Hello, I am ${this.name}, ${this.age} years old, working as ${this.position}.`;
    }
}

const employee1 = new Employee('Bob', 28, 'Developer');
console.log(employee1.introduce());
