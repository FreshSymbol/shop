import { useEffect, type ReactElement } from 'react';
import { useSelector } from 'react-redux';
import {
  getIsLoading,
  getProductsCatalog,
} from '../../store/slices/catalogSlice';
import { useDispatch } from '../../store/store';
import { productsApi } from '../../store/slices/actions';
import styles from './Catalog.module.css';
import { getFilterParams } from '../../store/slices/filterSlice';
import { Preloader } from '../preloader';
import { Product } from '../product';
import { getQuery } from '../../utils';

export const Catalog = (): ReactElement => {
  const dispatch = useDispatch();
  const products = useSelector(getProductsCatalog);
  const isLoading = useSelector(getIsLoading);
  const filterParams = useSelector(getFilterParams);

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
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </ul>
      )}
    </section>
  );
};
