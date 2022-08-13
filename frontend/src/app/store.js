import { configureStore } from '@reduxjs/toolkit';
import lightDarkReducer from '../features/lightDarkMode/lightDarkModeSlice';

export const store = configureStore({
  reducer: { lightDark: lightDarkReducer },
});
