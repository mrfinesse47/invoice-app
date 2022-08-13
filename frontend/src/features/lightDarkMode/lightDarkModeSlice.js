import { createSlice } from '@reduxjs/toolkit';

const isDarkMode = localStorage.getItem('isDarkMode');

//if there is nothing saved in local storage set it for the first time

if (isDarkMode === null) {
  localStorage.setItem('isDarkMode', false);
}

const initialState = {
  isDark: isDarkMode === 'true' ? true : false,
};

export const lightDarkModeSlice = createSlice({
  name: 'lightDarkMode',
  initialState,
  reducers: {
    toggle: (state) => {
      state.isDark = !state.isDark;
      localStorage.setItem('isDarkMode', state.isDark);
    },
  },
});

export const { toggle } = lightDarkModeSlice.actions;
export default lightDarkModeSlice.reducer;
