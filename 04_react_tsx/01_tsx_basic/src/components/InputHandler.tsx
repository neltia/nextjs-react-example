import { useState } from 'react';

export default function InputHandler() {
  const [text, setText] = useState<string>('');
  return (
    <div>
      <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} />
      <button onClick={() => alert(text)}>Show</button>
    </div>
  );
}