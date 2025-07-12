import { getQuery } from '.';
import type { TFilterParams, TProduct } from './types';

const BASE_URL: string = import.meta.env.VITE_API_URL;
const options = {
  method: 'GET',
  headers: {
    'Content-type': 'application/json',
  },
};

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export const getProducts = (formData: TFilterParams) => {
  return fetch(`${BASE_URL + getQuery(formData)}`, options).then((res) => {
    const totalCount = res.headers.get('x-total-count');
    return checkResponse<TProduct[]>(res).then((products) => {
      return { products, totalCount };
    });
  });
};
