import React from 'react';
import styles from './header.module.css';
import { Todos } from '../../types/todos';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>To Do List</h1>
      <p className={styles.howMany}>{}</p>
    </header>
  );
};

export default Header;
