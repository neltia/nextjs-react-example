const names = ['Alice', 'Bob', 'Charlie'];

export default function NameList() {
  return (
    <ul>
      {names.map((name, i) => (
        <li key={i}>{name}</li>
      ))}
    </ul>
  );
}