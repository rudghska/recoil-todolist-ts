import styles from './todoItem.module.css';
import { todoState } from '../../atoms/todoAtom';
import { Todos } from '../../types/todos';
import { useRecoilValue, useSetRecoilState } from 'recoil';

type TodoProps = {
  todo: Todos;
  key: number;
};

const TodoItem = ({ todo }: TodoProps) => {
  const currentTodos = useRecoilValue<Todos[]>(todoState);
  const todoHandler = useSetRecoilState<Todos[]>(todoState);

  const deleteTodo = () => {
    const todos = currentTodos.filter(currentTodo => {
      if (currentTodo.id !== todo.id) return currentTodo;
    });
    todoHandler(() => [...todos]);
  };

  const checkTodoState = () => {
    const todos = currentTodos.map(currentTodo => {
      if (currentTodo.id === todo.id) {
        return { ...currentTodo, isDone: !todo.isDone };
      }
      return currentTodo;
    });
    todoHandler(() => [...todos]);
  };

  return (
    <li className={styles.todo}>
      <input className={styles.checkbox} type="checkbox" onChange={checkTodoState} />
      <span className={styles.todoName}>{todo.todoName}</span>
      <button onClick={deleteTodo} className={styles.button}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default TodoItem;
