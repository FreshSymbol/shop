import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
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

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
