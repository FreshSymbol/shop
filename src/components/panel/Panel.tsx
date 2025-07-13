import type { ReactElement } from 'react';
import styles from './Panel.module.css';
import { BasketCount } from '../basket-count/BasketCount';
import { Filter } from '../filter';

export const Panel = (): ReactElement => {
  return (
    <section className={styles.panel}>
      <Filter />
      <BasketCount />
    </section>
  );
};
