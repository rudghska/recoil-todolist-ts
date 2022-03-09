import styles from './header.module.css';
import { useRecoilValue } from 'recoil';
import { todoCountSelector } from '../../atoms/todoAtom';

const Header = () => {
  const resultCount = useRecoilValue(todoCountSelector);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>To Do List</h1>
      <p className={styles.howMany}>{resultCount}</p>
    </header>
  );
};

export default Header;
