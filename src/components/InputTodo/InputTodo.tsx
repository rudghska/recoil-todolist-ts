import React from 'react';
import { useSetRecoilState } from 'recoil';
import styles from './inputTodo.module.css';
import { Todos } from '../../types/todos';
import { todoState } from '../../atoms/todoAtom';

const InputTodo = () => {
  const todoHandler = useSetRecoilState<Todos[]>(todoState);

  const onTodoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = (e.target as HTMLFormElement).children[0] as HTMLInputElement;
    // e.target 은 다른 요소가 될수도 있기 때문에 타입캐스팅 해줘야 한다고 함
    if (input.value === '') {
      input.focus();
      return;
    }

    if (!window.confirm('리스트에 추가 하시겠어요?')) {
      return;
    }

    todoHandler(todos => [...todos, { todoName: input.value, id: Date.now(), isDone: false }]);
    (e.target as HTMLFormElement).reset();
    input.focus();
  };
  return (
    <form className={styles.form} onSubmit={onTodoSubmit}>
      <input className={styles.input} type="text" placeholder="Todo...." />
      <button className={styles.submit} type="submit">
        할 일 추가
      </button>
    </form>
  );
};

export default InputTodo;
