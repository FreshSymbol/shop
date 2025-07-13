import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { TFilterParams } from '../../utils/types';

type TInitialState = {
  filterParams: TFilterParams;
};

const initialState: TInitialState = {
  filterParams: {
    category: '',
    page: 1,
    limit: '5',
    sort: '',
    order: '',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.filterParams.page += 1;
    },

    decrementPage: (state) => {
      state.filterParams.page -= 1;
    },

    setFilterParams: (state, actions: PayloadAction<TFilterParams>) => {
      state.filterParams = actions.payload;
      state.filterParams.page = 1;
    },

    setPage: (state, actions: PayloadAction<number>) => {
      state.filterParams.page = actions.payload;
    },
  },
  selectors: {
    getFilterParams: (state) => state.filterParams,
  },
});

export const { getFilterParams } = filterSlice.selectors;
export const { setFilterParams, incrementPage, decrementPage, setPage } =
  filterSlice.actions;

export default filterSlice.reducer;
