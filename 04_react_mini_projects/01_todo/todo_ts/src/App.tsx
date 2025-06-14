import { useState } from 'react';
import { FiCheckCircle, FiClipboard, FiTrendingUp } from 'react-icons/fi';
import FilterBar, { type FilterKey } from './components/FilterBar';
import StatsCard from './components/StatsCard';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useTodos } from './hooks/useTodos';

export default function App() {
  const { todos, add, toggle, clearCompleted, toggleAll } = useTodos();
  const [filter, setFilter] = useState<FilterKey>('all');

  const filtered = todos.filter(t =>
    filter === 'active'    ? !t.done
  : filter === 'completed' ?  t.done
  : true
  );

  const stats = {
    all: todos.length,
    active: todos.filter(t => !t.done).length,
    completed: todos.filter(t => t.done).length
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* 헤더 */}
      <header className="flex items-center mb-6">
        <FiClipboard className="text-4xl text-blue-600 mr-3" />
        <div>
          <h1 className="text-3xl font-bold">Todo App</h1>
          <p className="text-gray-600">할 일을 효율적으로 관리하세요</p>
        </div>
      </header>

      {/* 통계 카드 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
        <StatsCard
          icon={<FiClipboard className="text-2xl text-blue-600" />}
          label="전체"
          count={stats.all}
          bgColor="bg-blue-50"
          textColor="text-blue-600"
        />
        <StatsCard
          icon={<FiTrendingUp className="text-2xl text-yellow-600" />}
          label="진행중"
          count={stats.active}
          bgColor="bg-yellow-50"
          textColor="text-yellow-600"
        />
        <StatsCard
          icon={<FiCheckCircle className="text-2xl text-green-600" />}
          label="완료"
          count={stats.completed}
          bgColor="bg-green-50"
          textColor="text-green-600"
        />
      </div>

      {/* 입력창 */}
      <TodoInput onAdd={add} />

      {/* 필터 & 액션 */}
      {todos.length > 0 && (
        <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow p-6 mb-8">
          <FilterBar current={filter} counts={stats} onChange={setFilter} />
          <div className="flex gap-4 mt-4 md:mt-0">
            <button
              onClick={toggleAll}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm"
            >
              모두 {todos.every(t => t.done) ? '미완료' : '완료'}
            </button>
            {stats.completed > 0 && (
              <button
                onClick={clearCompleted}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
              >
                완료된 할 일 삭제
              </button>
            )}
          </div>
        </div>
      )}

      {/* 리스트 */}
      <TodoList todos={filtered} onToggle={toggle} />

      {/* 사용법 안내 */}
      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
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
