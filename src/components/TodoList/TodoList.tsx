import React, { useRef, useEffect } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import styles from './todos.module.css';
import { Todos } from '../../types/todos';

const TodosList = () => {
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    ulRef.current?.lastElementChild?.scrollIntoView(false);
  });

  return <ul ref={ulRef} className={styles.list}></ul>;
};

export default TodosList;
