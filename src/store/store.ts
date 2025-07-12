import { configureStore } from '@reduxjs/toolkit';
import {
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from 'react-redux';
import catalog from './slices/catalogSlice';
import basket from './slices/basketSlice';
import filter from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    catalog,
    basket,
    filter,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch = dispatchHook.withTypes<AppDispatch>();
export const useSelector = selectorHook.withTypes<RootState>();
