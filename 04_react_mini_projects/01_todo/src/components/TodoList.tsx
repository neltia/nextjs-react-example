// src/components/TodoList.tsx
import { FiInbox } from 'react-icons/fi'
import type { Todo } from '../types'
import TodoItem from './TodoItem'

interface TodoListProps {
  todos: Todo[]
  onToggle: (id: number) => void
  onUpdate: (id: number, text: string) => void
}

export default function TodoList({
  todos,
  onToggle,
  onUpdate,
}: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="rounded-lg bg-white p-8 shadow text-center">
        <FiInbox className="mx-auto text-5xl text-gray-400 mb-3" />
        <p className="font-medium mb-1">첫 번째 할 일을 추가해보세요!</p>
        <p className="text-gray-500">
          위 입력창에 할 일을 입력하고 ‘추가’를 눌러주세요
        </p>
      </div>
    )
  }

  return (
    <ul className="space-y-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  )
}
