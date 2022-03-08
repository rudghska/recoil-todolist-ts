import React from 'react';
import styles from './App.module.css';
import InputTodo from './components/InputTodo/InputTodo';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <div className={styles.todoApp}>
      <RecoilRoot>
        <Header />
        <InputTodo />
        <TodoList />
      </RecoilRoot>
    </div>
  );
}

export default App;
