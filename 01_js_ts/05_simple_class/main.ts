// simple_class.ts
// TypeScript에서 클래스(Class)를 선언하고 상속(Inheritance)을 사용하는 예제입니다.

// 1) 클래스 선언 시 멤버 변수에 타입 주석 추가
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name; // 속성 초기화
        this.age = age;
    }

    // 메서드 시그니처에도 반환 타입을 명시
    introduce(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// 2) 클래스 상속 예시: Employee 클래스는 Person 클래스를 확장
class Employee extends Person {
    position: string;

    constructor(name: string, age: number, position: string) {
        // 부모 클래스(Person)의 생성자를 반드시 호출해야 함
        super(name, age);
        this.position = position;
    }

    // 부모 클래스 메서드를 오버라이드할 때에도 반환 타입을 지켜야 함
    introduce(): string {
        return `Hello, I am ${this.name}, ${this.age} years old, working as ${this.position}.`;
    }
}

// 3) 인스턴스 생성
const person1: Person = new Person('Alice', 30);
console.log(person1.introduce());

const employee1: Employee = new Employee('Bob', 28, 'Developer');
console.log(employee1.introduce());
