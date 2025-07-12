import { type ReactElement } from 'react';
import styles from './Pagination.module.css';
import {
  decrementPage,
  getFilterParams,
  incrementPage,
  setPage,
} from '../../store/slices/filterSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { getTotalCount } from '../../store/slices/catalogSlice';
import { showPagination } from '../../utils';

export const Pagination = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { page, limit } = useAppSelector(getFilterParams);
  const countProduct = useAppSelector(getTotalCount)!;

  const lastPage: number = Math.ceil(+countProduct / +limit);

  const pages: number[] = showPagination(page, lastPage, 3);

  const switchNextPageHandler = () => {
    dispatch(incrementPage());
  };

  const switchPreviousPageHandler = () => {
    dispatch(decrementPage());
  };

  const switchTargetPageHandler = (value: number) => {
    dispatch(setPage(value));
  };

  return (
    <div className={styles.pagination}>
      <button
        disabled={page <= 1 ? true : false}
        className={styles.button}
        onClick={switchPreviousPageHandler}
      >
        {'<'}
      </button>
      <ul className={styles.list}>
        {pages.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.page} ${
                page === value ? styles.active : ''
              }`}
              onClick={() => switchTargetPageHandler(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
      <button
        disabled={page === lastPage ? true : false}
        className={styles.button}
        onClick={switchNextPageHandler}
      >
        {'>'}
      </button>
    </div>
  );
};
