import { memo, type ReactElement } from 'react';
import styles from './Filter.module.css';
import { setFilterParams } from '../../store/slices/filterSlice';
import { getFilterParams } from '../../store/slices/filterSlice';

import { CATEGORY_CONTENT } from '../../utils/constants';
import { useAppDispatch, useAppSelector } from '../../store/store';

export const Filter = memo((): ReactElement => {
  const filterParams = useAppSelector(getFilterParams);
  const dispatch = useAppDispatch();

  const changeParamFilterHandler = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = evt.target;
    dispatch(setFilterParams({ ...filterParams, [name]: value }));
  };

  return (
    <form className={styles.form}>
      <fieldset>
        <legend className={styles.title}>Категории: </legend>
        <ul className={styles.list}>
          <li>
            <input
              className={styles.radio}
              onChange={changeParamFilterHandler}
              type="radio"
              name="category"
              id="все"
              value={''}
              checked={filterParams.category === ''}
            />
            <label className={styles.label} htmlFor="все">
              Все
            </label>
          </li>
          {CATEGORY_CONTENT.map((category, index) => (
            <li key={index}>
              <input
                className={styles.radio}
                onChange={changeParamFilterHandler}
                type="radio"
                name="category"
                value={category}
                checked={filterParams.category === category}
                id={category}
              />
              <label className={styles.label} htmlFor={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </label>
            </li>
          ))}
        </ul>
      </fieldset>

      <fieldset>
        <legend className={styles.title}>Показывать по: </legend>
        <select
          className={styles.select}
          onChange={changeParamFilterHandler}
          defaultValue={filterParams.limit}
          name="limit"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </fieldset>

      <fieldset>
        <legend className={styles.title}>Сортировать по:</legend>
        <select
          className={styles.select}
          onChange={changeParamFilterHandler}
          defaultValue={filterParams.sort}
          name="sort"
        >
          <option value="title">названию</option>
          <option value="price">цене</option>
        </select>
      </fieldset>

      <fieldset>
        <legend className={styles.title}>Сортировка по:</legend>
        <select
          className={styles.select}
          onChange={changeParamFilterHandler}
          defaultValue={filterParams.order}
          name="order"
        >
          <option value="asc">увеличению</option>
          <option value="desc">убыванию</option>
        </select>
      </fieldset>
    </form>
  );
});
