interface Person {
  name: string;
  age: number;
  greet(): string;
}
const user: Person = {
  name: 'moca',
  age: 28,
  greet() {
    return `Hi, ${this.name}`;
  }
};