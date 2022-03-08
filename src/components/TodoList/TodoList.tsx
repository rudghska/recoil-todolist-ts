import React, { useRef, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import TodoItem from '../TodoItem/TodoItem';
import styles from './todos.module.css';
import { Todos } from '../../types/todos';
import { todoState } from '../../atoms/todoAtom';

const TodosList = () => {
  const ulRef = useRef<HTMLUListElement>(null);
  const todos = useRecoilValue<Todos[]>(todoState);

  useEffect(() => {
    ulRef.current?.lastElementChild?.scrollIntoView();
  });

  return (
    <ul ref={ulRef} className={styles.list}>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodosList;
