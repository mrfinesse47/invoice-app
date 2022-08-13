import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDark: false,
};

export const lightDarkModeSlice = createSlice({
  name: 'lightDarkMode',
  initialState,
  reducers: {
    toggle: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { toggle } = lightDarkModeSlice.actions;
export default lightDarkModeSlice.reducer;
