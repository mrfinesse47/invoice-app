import { configureStore } from '@reduxjs/toolkit';
import lightDarkReducer from '../features/lightDarkMode/lightDarkModeSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: { lightDark: lightDarkReducer, auth: authReducer },
});
