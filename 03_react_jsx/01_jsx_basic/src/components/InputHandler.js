import { useState } from 'react';

export default function InputHandler() {
  const [text, setText] = useState('');
  return (
    <div>
      <input onChange={e => setText(e.target.value)} />
      <button onClick={() => alert(text)}>Show</button>
    </div>
  );
}