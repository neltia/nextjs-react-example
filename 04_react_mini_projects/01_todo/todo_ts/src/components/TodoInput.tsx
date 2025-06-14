import React, { useState } from 'react';

interface Props { onAdd: (text: string) => void }

export default function TodoInput({ onAdd }: Props) {
  const [text, setText] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text.trim());
    setText('');
  };

  return (
    <form onSubmit={submit} className="mb-8">
      <div className="flex rounded-lg shadow-sm bg-white overflow-hidden">
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="새로운 할 일을 입력하세요..."
          className="flex-1 px-4 py-3 focus:outline-none"
        />
        <button
          type="submit"
          disabled={!text.trim()}
          className="px-6 py-3 bg-blue-600 text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          추가
        </button>
      </div>
    </form>
  );
}
