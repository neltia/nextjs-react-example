import { FiInbox } from 'react-icons/fi';
import type { Todo } from '../types';

export default function TodoList({ todos, onToggle }: { todos: Todo[]; onToggle: (id: number) => void }) {
  if (todos.length === 0) {
    return (
      <div className="rounded bg-white p-6 shadow text-center">
        <FiInbox className="mx-auto text-4xl text-gray-400 mb-2" />
        <p className="font-medium mb-1">첫 번째 할일을 추가해보세요!</p>
        <p className="text-gray-500">위의 입력창에 할일을 적어주세요</p>
      </div>
    );
  }

  return (
    <ul className="space-y-2">
      {todos.map(todo => (
        <li key={todo.id} className="flex items-center bg-white p-3 rounded shadow-sm">
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => onToggle(todo.id)}
            className="mr-3 h-5 w-5 text-blue-600 rounded"
          />
          <span className={todo.done ? 'line-through text-gray-400 flex-1' : 'flex-1'}>
            {todo.text}
          </span>
        </li>
      ))}
    </ul>
  );
}
