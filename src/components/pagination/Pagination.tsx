import { useMemo, type ReactElement } from 'react';
import styles from './Pagination.module.css';
import {
  decrementPage,
  getFilterParams,
  incrementPage,
  setPage,
} from '../../store/slices/filterSlice';
import { useDispatch, useSelector } from '../../store/store';
import { getTotalCount } from '../../store/slices/catalogSlice';
import { showPagination } from '../../utils';

export const Pagination = (): ReactElement => {
  const dispatch = useDispatch();
  const { page, limit } = useSelector(getFilterParams);
  const countProduct = useSelector(getTotalCount)!;

  const lastPage = useMemo(() => {
    return Math.ceil(+countProduct / +limit);
  }, [limit, countProduct]);

  console.log(lastPage);

  const pages = useMemo(
    () => showPagination(page, lastPage, 3),
    [page, lastPage]
  );

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
