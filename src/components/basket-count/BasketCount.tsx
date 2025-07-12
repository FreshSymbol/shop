import type { ReactElement } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { getTotalCount, openBasket } from '../../store/slices/basketSlice';
import styles from './BasketCount.module.css';

export const BasketCount = (): ReactElement => {
  const count = useAppSelector(getTotalCount);
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    dispatch(openBasket());
  };
  return (
    <button className={styles.basket} onClick={clickHandler}>
      Корзина: <span className={styles.count}>{count}</span>
    </button>
  );
};
