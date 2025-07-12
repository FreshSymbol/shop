import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { TProductBasket } from '../../utils/types';
import { nanoid } from 'nanoid';

type TInitialState = {
  products: TProductBasket[];
  isActive: boolean;
  totalCount: number;
  totalPrice: number;
};

const initialState: TInitialState = {
  products: [],
  isActive: false,
  totalCount: 0,
  totalPrice: 0,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    openBasket: (state) => {
      state.isActive = true;
    },

    closeBasket: (state) => {
      state.isActive = false;
    },

    addProduct: {
      reducer: (state, actions: PayloadAction<TProductBasket>) => {
        state.products = [...state.products, actions.payload];
        state.totalCount += 1;
        state.totalPrice += actions.payload.price;
      },
      prepare: (product: TProductBasket) => {
        return { payload: { ...product, id: nanoid() } };
      },
    },

    clearBasket: (state) => {
      state.products = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },

    removeProduct: (state, actions: PayloadAction<TProductBasket>) => {
      state.totalCount -= 1;
      state.totalPrice -= actions.payload.price;
      const targetIndex = state.products.findIndex(
        (product) => product.id === actions.payload.id
      );
      state.products.splice(targetIndex, 1);
    },
  },
  selectors: {
    getIsActive: (state) => state.isActive,
    getTotalPrice: (state) => state.totalPrice,
    getTotalCount: (state) => state.totalCount,
    getProductBasket: (state) => state.products,
  },
});

export const { getIsActive, getTotalCount, getTotalPrice, getProductBasket } =
  basketSlice.selectors;
export const {
  openBasket,
  closeBasket,
  clearBasket,
  addProduct,
  removeProduct,
} = basketSlice.actions;
export default basketSlice.reducer;
