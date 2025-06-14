// src/hooks/useTodos.ts
import { useCallback, useEffect, useState } from 'react';
import type { Todo } from '../types';

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // 로컬 스토리지에서 할 일 목록을 불러오고 저장하는 훅
  useEffect(() => {
    const s = localStorage.getItem('todos');
    if (s) setTodos(JSON.parse(s));
  }, []);

  // 할 일 목록이 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // 새로운 할 일을 추가하는 함수
  // - id는 현재 시간의 타임스탬프를 사용하고, done은 false로 초기화
  const add = useCallback((text: string) => {
    setTodos(t => [{ id: Date.now(), text, done: false, createdAt: new Date() }, ...t]);
  }, []);

  // 할 일의 완료 상태를 토글하는 함수
  const toggle = useCallback((id: number) => {
    setTodos(t => t.map(x => x.id === id ? { ...x, done: !x.done } : x));
  }, []);

  // 완료된 할 일을 삭제하는 함수
  const clearCompleted = useCallback(() => {
    setTodos(t => t.filter(x => !x.done));
  }, []);

  // 모든 할 일의 완료 상태를 토글하는 함수
  const toggleAll = useCallback(() => {
    setTodos(t => {
      const all = t.every(x => x.done);
      return t.map(x => ({ ...x, done: !all }));
    });
  }, []);

  // 할 일 목록을 반환하는 훅
  return { todos, add, toggle, clearCompleted, toggleAll };
}
