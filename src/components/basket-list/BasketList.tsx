import type { ReactElement } from 'react';
import { useSelector } from '../../store/store';
import { getProductBasket } from '../../store/slices/basketSlice';
import styles from './BasketList.module.css';
import { BasketProduct } from '../basket-product';

export const BasketList = (): ReactElement => {
  const products = useSelector(getProductBasket);

  return (
    <ul className={styles.list}>
      {products.map((product) => (
        <BasketProduct key={product.id} {...product} />
      ))}
    </ul>
  );
};
