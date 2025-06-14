// src/components/TodoItem.tsx
import { useEffect, useRef, useState } from 'react';
import type { Todo } from '../types';

interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
  onUpdate: (id: number, text: string) => void;
}

export default function TodoItem({ todo, onToggle, onUpdate }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(todo.text);
  const inputRef = useRef<HTMLInputElement>(null);

  // 편집 모드 진입 시 자동 포커스
  useEffect(() => {
    if (isEditing) inputRef.current?.focus();
  }, [isEditing]);

  const finish = () => {
    const t = draft.trim();
    if (t && t !== todo.text) onUpdate(todo.id, t);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between p-4 rounded-lg bg-white shadow-sm">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5 text-blue-600 rounded"
        />

        {isEditing ? (
          <input
            ref={inputRef}
            value={draft}
            onChange={e => setDraft(e.target.value)}
            onBlur={finish}
            onKeyDown={e => {
              if (e.key === 'Enter') finish();
              if (e.key === 'Escape') { setIsEditing(false); setDraft(todo.text); }
            }}
            className="flex-1 px-3 py-1 border-b-2 border-blue-400 focus:outline-none"
          />
        ) : (
          <span
            onDoubleClick={() => setIsEditing(true)}
            className={`${todo.done ? 'line-through text-gray-400' : ''} cursor-pointer`}
          >
            {todo.text}
          </span>
        )}
      </div>

      <span className="text-xs text-gray-400">
        {todo.createdAt.toLocaleString('ko-KR')}
      </span>
    </li>
  );
}
