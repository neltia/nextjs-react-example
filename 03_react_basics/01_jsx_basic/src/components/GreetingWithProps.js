function Greeting({ name }) {
  return <p>Hello, {name}!</p>;
}

export default function GreetingWithProps() {
  return <Greeting name="Mocha" />;
}