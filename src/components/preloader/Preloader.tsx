import type { ReactElement } from 'react';
import style from './Preloader.module.css';

export const Preloader = (): ReactElement => {
  return (
    <div className={style.preloader}>
      <div className={style.spinner}></div>
      <p className={style.text}>Загрузка...</p>
    </div>
  );
};
