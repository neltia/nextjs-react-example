type GreetingProps = { name: string };

function Greeting({ name }: GreetingProps) {
  return <p>Hello, {name}!</p>;
}

export default function GreetingWithProps() {
  return <Greeting name="Mocha" />;
}