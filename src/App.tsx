import styles from './App.module.css';
import { Main } from './components/main';
import { Basket } from './components/basket';
import { type ReactElement } from 'react';

function App(): ReactElement {
  return (
    <div className={styles.app}>
      <Main />
      <Basket />
    </div>
  );
}

export default App;
