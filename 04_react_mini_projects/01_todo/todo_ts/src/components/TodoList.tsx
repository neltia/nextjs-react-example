import { FiInbox } from 'react-icons/fi';
import type { Todo } from '../types';

interface Props {
  todos: Todo[];
  onToggle: (id: number) => void;
}

export default function TodoList({ todos, onToggle }: Props) {
  if (todos.length === 0) {
    return (
      <div className="rounded-lg bg-white p-8 shadow text-center">
        <FiInbox className="mx-auto text-5xl text-gray-400 mb-3" />
        <p className="font-medium mb-1">첫 번째 할 일을 추가해보세요!</p>
        <p className="text-gray-500">위 입력창에 할 일을 입력하고 ‘추가’를 눌러주세요</p>
      </div>
    );
  }

  return (
    <ul className="space-y-4">
      {todos.map(todo => (
        <li
          key={todo.id}
          className={`flex items-center justify-between p-4 rounded-lg bg-white shadow-sm transition ${
            todo.done ? 'bg-gray-50' : 'hover:bg-gray-50'
          }`}
        >
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => onToggle(todo.id)}
              className="w-5 h-5 text-blue-600 rounded"
            />
            <span className={todo.done ? 'line-through text-gray-400' : ''}>{todo.text}</span>
          </label>
          <span className="text-xs text-gray-400">
            {todo.createdAt.toLocaleString('ko-KR')}
          </span>
        </li>
      ))}
    </ul>
  );
}
