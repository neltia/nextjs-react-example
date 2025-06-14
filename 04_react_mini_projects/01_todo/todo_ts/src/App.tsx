import { useEffect, useState } from 'react';
import { FiCheckCircle, FiClipboard, FiTrendingUp } from 'react-icons/fi';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import type { Todo } from './types';

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all'|'active'|'completed'>('all');

  // 로컬 스토리지 로드/저장
  useEffect(() => {
    const stored = localStorage.getItem('todos');
    if (stored) setTodos(JSON.parse(stored));
  }, []);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // 핸들러
  const addTodo = (text: string) =>
    setTodos([{ id: Date.now(), text, done: false }, ...todos]);
  const toggleTodo = (id: number) =>
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
  const clearCompleted = () => setTodos(todos.filter(t => !t.done));
  const toggleAll = () => {
    const allDone = todos.every(t => t.done);
    setTodos(todos.map(t => ({ ...t, done: !allDone })));
  };

  // 필터 처리
  const filtered = todos.filter(t =>
    filter === 'active'    ? !t.done :
    filter === 'completed' ?  t.done : true
  );

  // 통계
  const total = todos.length;
  const activeCount = todos.filter(t => !t.done).length;
  const completedCount = todos.filter(t => t.done).length;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* 헤더 */}
      <header className="flex items-center mb-4">
        <FiClipboard className="text-4xl text-blue-600 mr-3" />
        <div>
          <h1 className="text-3xl font-bold">Todo App</h1>
          <p className="text-gray-600">할 일을 효율적으로 관리하세요</p>
        </div>
      </header>

      {/* 통계 카드 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
          <FiClipboard className="mx-auto text-2xl text-blue-600 mb-2" />
          <p className="text-sm text-blue-500">전체</p>
          <p className="text-2xl font-bold text-blue-600">{total}</p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg text-center">
          <FiTrendingUp className="mx-auto text-2xl text-yellow-600 mb-2" />
          <p className="text-sm text-yellow-500">진행중</p>
          <p className="text-2xl font-bold text-yellow-600">{activeCount}</p>
        </div>
        <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
          <FiCheckCircle className="mx-auto text-2xl text-green-600 mb-2" />
          <p className="text-sm text-green-500">완료</p>
          <p className="text-2xl font-bold text-green-600">{completedCount}</p>
        </div>
      </div>

      {/* 입력창 */}
      <div className="mb-8">
        <TodoInput onAdd={addTodo} />
      </div>

      {/* 필터 & 액션 */}
      {total > 0 && (
        <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex flex-wrap gap-3 mb-4 md:mb-0">
            {[
              { key: 'all',       label: `전체 (${total})` },
              { key: 'active',    label: `진행중 (${activeCount})` },
              { key: 'completed', label: `완료 (${completedCount})` },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key as 'all' | 'active' | 'completed')}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition ${
                  filter === key
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <button
              onClick={toggleAll}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 text-sm"
            >
              모두 {todos.every(t => t.done) ? '미완료' : '완료'}
            </button>
            {completedCount > 0 && (
              <button
                onClick={clearCompleted}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
              >
                완료된 할 일 삭제
              </button>
            )}
          </div>
        </div>
      )}

      {/* Todo 리스트 */}
      <TodoList todos={filtered} onToggle={toggleTodo} />

      {/* 사용법 안내 */}
      <div className="mt-10 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <h2 className="font-semibold mb-3">사용법</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>할 일을 더블클릭하면 수정할 수 있습니다.</li>
          <li>Enter 키로 할 일을 추가하거나 수정 완료할 수 있습니다.</li>
          <li>체크박스를 클릭해 완료/미완료를 토글합니다.</li>
          <li>데이터는 브라우저에 자동으로 저장됩니다.</li>
        </ul>
      </div>
    </div>
  );
}
