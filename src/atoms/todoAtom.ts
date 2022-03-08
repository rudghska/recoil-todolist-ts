import { atom } from 'recoil';
import { Todos } from './../types/todos';

export const todoState = atom<Todos[]>({
  key: 'todos',
  default: [],
});
