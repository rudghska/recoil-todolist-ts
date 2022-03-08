import { atom } from 'recoil';
import { Todos } from './../types/todos';

export const todosState = atom<Todos[]>({
  key: 'todos',
  default: [],
});

export const inputState = atom<string>({
  key: 'inputState',
  default: '',
});
