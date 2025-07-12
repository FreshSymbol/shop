import type { ReactElement } from 'react';
import { useDispatch } from '../../store/store';
import { getTotalCount, openBasket } from '../../store/slices/basketSlice';
import { useSelector } from 'react-redux';
import styles from './BasketCount.module.css';

export const BasketCount = (): ReactElement => {
  const count = useSelector(getTotalCount);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(openBasket());
  };
  return (
    <button className={styles.basket} onClick={clickHandler}>
      Корзина: <span className={styles.count}>{count}</span>
    </button>
  );
};
