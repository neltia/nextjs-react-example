// 인터페이스: createdAt을 string(ISO)으로 변경
export interface Todo {
  id: number;
  task: string;
  completed: boolean;
  createdAt: string;
}

export class TodoManager {
  // ID 충돌 방지를 위해 별도 카운터 사용
  private nextId = 1;
  // 최신 ECMAScript private 필드 문법(#)을 써도 됩니다.
  private todos: Todo[] = [];

  // 화살표 함수로 정의해 this 바인딩 문제 해결
  public addTodo = (task: string): Todo => {
    if (!task.trim()) {
      throw new Error('할 일은 빈 문자열일 수 없습니다.');
    }

    const newTodo: Todo = {
      id: this.nextId++,
      task: task.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    this.todos.push(newTodo);
    console.log(`✅ 할일 추가됨: "${newTodo.task}" (ID: ${newTodo.id})`);
    return newTodo;
  };

  public completeTodo = (todoId: number): Todo => {
    const todo = this.todos.find((t) => t.id === todoId);
    if (!todo) {
      throw new Error(`할 일(ID: ${todoId})이(가) 존재하지 않습니다.`);
    }
    if (todo.completed) {
      console.warn(`⚠️ 할 일(ID: ${todoId})은 이미 완료된 상태입니다.`);
      return todo;
    }

    todo.completed = true;
    console.log(`🎉 할일 완료: "${todo.task}" (ID: ${todo.id})`);
    return todo;
  };

  public getPendingTodos = (): Todo[] => {
    return this.todos.filter((t) => !t.completed);
  };

  // 테스트를 위해 문자열을 반환하도록 변경
  public displayTodos = (): string => {
    if (this.todos.length === 0) {
      return '할 일이 없습니다.';
    }

    const lines = this.todos.map((todo) => {
      const status = todo.completed ? '✅' : '⏳';
      const date = new Date(todo.createdAt).toLocaleString();
      return `${status} [${todo.id}] ${todo.task} (생성: ${date})`;
    });

    const output = ['=== 할일 목록 ===', ...lines].join('\n');
    console.log(output);
    return output;
  };

  // (선택) 삭제 기능 추가
  public removeTodo = (todoId: number): boolean => {
    const idx = this.todos.findIndex((t) => t.id === todoId);
    if (idx === -1) {
      console.warn(`⚠️ 할 일(ID: ${todoId})을(를) 찾을 수 없습니다.`);
      return false;
    }
    this.todos.splice(idx, 1);
    console.log(`🗑️ 할일 삭제됨 (ID: ${todoId})`);
    return true;
  };
}
