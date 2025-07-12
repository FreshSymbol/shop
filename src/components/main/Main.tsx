import { type ReactElement } from 'react';
import styles from './Main.module.css';
import { Panel } from '../panel';
import { Catalog } from '../catalog';
import { Pagination } from '../pagination';

export const Main = (): ReactElement => {
  return (
    <main className={styles.main}>
      <Panel />
      <Catalog />
      <Pagination />
    </main>
  );
};
