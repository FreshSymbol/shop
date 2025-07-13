import type { ReactElement } from 'react';
import { useAppSelector } from '../../store/store';
import { getProductBasket } from '../../store/slices/basketSlice';
import styles from './BasketList.module.css';
import { BasketProduct } from '../basket-product';
import type { TProductBasket } from '../../utils/types';

export const BasketList = (): ReactElement => {
  const products = useAppSelector(getProductBasket);

  return (
    <ul className={styles.list}>
      {products.map((product: TProductBasket) => (
        <BasketProduct key={product.id} {...product} />
      ))}
    </ul>
  );
};
