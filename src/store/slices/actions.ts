import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '../../utils/product-api';
import type { TFilterParams } from '../../utils/types';

export const productsApi = createAsyncThunk(
  'catalog/productsApi',
  async (filterParams: TFilterParams) => getProducts(filterParams)
);
