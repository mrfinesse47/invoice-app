import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import invoiceService from './invoicesService';

const initialState = {
  invoices: [],
  filteredInvoices: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  filter: null,
};

//get goals
export const getInvoices = createAsyncThunk(
  'invoices/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await invoiceService.getInvoices(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const invoicesSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {
    reset: (state) => initialState,
    setFilter: (state, action) => {
      if (action.payload) {
        state.filter = action.payload.toLowerCase();
      } else {
        state.filter = null;
      }

      if (state.filter) {
        state.filteredInvoices = state.invoices.filter(
          (item) => item.status === state.filter
        );
      } else {
        state.filteredInvoices = [...state.invoices];
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInvoices.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getInvoices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.invoices = action.payload;
        if (state.filter) {
          state.filteredInvoices = state.invoices.filter(
            (item) => item.status === state.filter
          );
        } else {
          state.filteredInvoices = [...state.invoices];
        }
      })
      .addCase(getInvoices.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, setFilter } = invoicesSlice.actions;
export default invoicesSlice.reducer;
