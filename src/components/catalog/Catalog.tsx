import { useEffect, type ReactElement } from 'react';
import {
  getIsLoading,
  getProductsCatalog,
} from '../../store/slices/catalogSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { productsApi } from '../../store/slices/actions';
import styles from './Catalog.module.css';
import { getFilterParams } from '../../store/slices/filterSlice';
import { Preloader } from '../preloader';
import { Product } from '../product';
import { getQuery } from '../../utils';
import type { TProduct } from '../../utils/types';

export const Catalog = (): ReactElement => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(getProductsCatalog);
  const isLoading = useAppSelector(getIsLoading);
  const filterParams = useAppSelector(getFilterParams);

  useEffect(() => {
    dispatch(productsApi(filterParams));
    history.replaceState(
      { query: getQuery(filterParams) },
      '',
      getQuery(filterParams)
    );

    return () => {};
  }, [filterParams, dispatch]);

  return (
    <section>
      {isLoading ? (
        <Preloader />
      ) : (
        <ul className={styles.catalog}>
          {products.map((product: TProduct) => (
            <Product key={product.id} {...product} />
          ))}
        </ul>
      )}
    </section>
  );
};
