import { createSlice } from '@reduxjs/toolkit';
import type { TProduct } from '../../utils/types';
import { productsApi } from './actions';

type TInitialState = {
  products: TProduct[];
  isLoading: boolean;
  totalCount: string | null;
  error: string;
};

const initialState: TInitialState = {
  products: [],
  isLoading: false,
  totalCount: '',
  error: '',
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {},
  selectors: {
    getProductsCatalog: (state) => state.products,
    getIsLoading: (state) => state.isLoading,
    getError: (state) => state.error,
    getTotalCount: (state) => state.totalCount,
  },
  extraReducers: (builder) =>
    builder
      .addCase(productsApi.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(productsApi.rejected, (state, actions) => {
        state.isLoading = false;
        state.error = actions.error.message!;
      })
      .addCase(productsApi.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.products = actions.payload.products;
        state.totalCount = actions.payload.totalCount;
      }),
});
export const { getProductsCatalog, getIsLoading, getError, getTotalCount } =
  catalogSlice.selectors;
export default catalogSlice.reducer;
