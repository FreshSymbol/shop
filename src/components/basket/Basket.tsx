import { useCallback, useEffect, useRef, type ReactElement } from 'react';
import styles from './Basket.module.css';
import {
  getIsActive,
  getTotalPrice,
  clearBasket,
  getProductBasket,
  closeBasket,
} from '../../store/slices/basketSlice';
import { useDispatch, useSelector } from '../../store/store';
import { BasketList } from '../basket-list';

export const Basket = (): ReactElement => {
  const isActive = useSelector(getIsActive);
  const totalPrice = useSelector(getTotalPrice);
  const products = useSelector(getProductBasket);
  const refBasket = useRef<HTMLElement | null>(null);
  const dispatch = useDispatch();

  const clickClearHandler = () => {
    dispatch(clearBasket());
  };

  const clickCloseBasketHandler = useCallback(
    (evt: MouseEvent) => {
      if (
        refBasket.current &&
        !refBasket.current.contains(evt.target as HTMLElement)
      )
        dispatch(closeBasket());
    },
    [dispatch]
  );

  useEffect(() => {
    if (isActive) {
      document.addEventListener('mousedown', clickCloseBasketHandler);
    } else document.removeEventListener('mousedown', clickCloseBasketHandler);

    return () =>
      document.removeEventListener('mousedown', clickCloseBasketHandler);
  }, [isActive, clickCloseBasketHandler]);

  return (
    <aside
      ref={refBasket}
      className={`${styles.basket} ${isActive ? styles.active : ''}`}
    >
      <h2 className={styles.title}>Корзина товаров</h2>
      {products.length ? (
        <>
          <BasketList />
          <p className={styles.total}>Итого: {totalPrice.toFixed(2)} ₽</p>
          <button className={styles.clear} onClick={clickClearHandler}>
            Очистить
          </button>
        </>
      ) : (
        <p className={styles.empty}>Пустая...</p>
      )}
    </aside>
  );
};
