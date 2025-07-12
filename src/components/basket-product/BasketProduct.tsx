import type { ReactElement } from 'react';
import type { TProductBasket } from '../../utils/types';
import styles from './BasketProduct.module.css';
import { useAppDispatch } from '../../store/store';
import { removeProduct } from '../../store/slices/basketSlice';
import { memo } from 'react';

type BasketProductProps = TProductBasket;

export const BasketProduct = memo(
  ({ id, title, price }: BasketProductProps): ReactElement => {
    const dispatch = useAppDispatch();

    const removeProductToBasketHandler = () =>
      dispatch(removeProduct({ id, title, price }));

    return (
      <li className={styles.product}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.price}>{price} ₽</p>
        <button
          className={styles.delete}
          onClick={removeProductToBasketHandler}
        >
          x
        </button>
      </li>
    );
  }
);
