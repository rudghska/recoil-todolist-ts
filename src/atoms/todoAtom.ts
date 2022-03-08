import { atom, selector } from 'recoil';
import { Todos } from './../types/todos';

export const todoState = atom<Todos[]>({
  key: 'todos',
  default: [],
});

export const todoCountSelector = selector({
  key: 'todoCount',
  get: ({ get }) => {
    const todos = get(todoState);

    return `해야 할 일 : ${todos.filter(todo => !todo.isDone).length}`;
  },
});
