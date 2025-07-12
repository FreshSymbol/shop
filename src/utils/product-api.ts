import { getQuery } from '.';
import type { TFilterParams, TProduct } from './types';

const BASE_URL: string = import.meta.env.VITE_API_URL;
const options = {
  method: 'GET',
  headers: {
    'Content-type': 'application/json',
  },
};

const checkResponse = async <T>(res: Response): Promise<T> => {
  if (res.ok) return await res.json();
  else {
    const err = await res.json();
    return Promise.reject(err);
  }
};

export const getProducts = async (filterParams: TFilterParams) => {
  const res = await fetch(`${BASE_URL + getQuery(filterParams)}`, options);
  const totalCount: string | null = res.headers.get('x-total-count');
  const products: TProduct[] = await checkResponse(res);
  return { totalCount, products };
};
