import { configureStore } from '@reduxjs/toolkit';
import lightDarkReducer from '../features/lightDarkMode/lightDarkModeSlice';
import authReducer from '../features/auth/authSlice';
import invoiceReducer from '../features/invoices/invoicesSlice';

export const store = configureStore({
  reducer: {
    lightDark: lightDarkReducer,
    auth: authReducer,
    invoices: invoiceReducer,
  },
});
