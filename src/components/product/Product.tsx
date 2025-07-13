import { memo, type ReactElement } from 'react';
import type { TProduct } from '../../utils/types';
import styles from './Product.module.css';
import { useAppDispatch } from '../../store/store';
import { addProduct } from '../../store/slices/basketSlice';

type ProductProps = TProduct;

export const Product = memo(
  ({ id, title, description, price, category }: ProductProps): ReactElement => {
    const dispatch = useAppDispatch();
    const addProductToBasketHandler = (
      evt: React.MouseEvent<HTMLButtonElement>
    ) => {
      evt.currentTarget.blur();
      dispatch(addProduct({ id, title, price }));
    };

    return (
      <li className={styles.product}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{description}</p>
        <div className={styles.info}>
          <span className={styles.category}>{category}</span>
          <span className={styles.price}>{price} ₽</span>
        </div>
        <button className={styles.toBasket} onClick={addProductToBasketHandler}>
          В корзину
        </button>
      </li>
    );
  }
);
