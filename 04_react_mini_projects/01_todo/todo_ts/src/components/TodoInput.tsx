import React, { useState } from 'react';

// 사용자 입력을 받아 상위 컴포넌트에 전달
export default function TodoInput({ onAdd }: { onAdd: (text: string) => void }) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text.trim());
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex border rounded p-1 shadow-sm bg-white">
        <input
          className="flex-1 px-3 py-2 focus:outline-none"
          placeholder="새로운 할일을 입력하세요..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button type="submit" className="ml-2 px-4 py-2 bg-blue-600 text-white rounded">
          추가
        </button>
      </div>
    </form>
  );
}
