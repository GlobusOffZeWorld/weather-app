import { createSlice } from '@reduxjs/toolkit';

import { ThemeType } from '@/types/models';

const initialState: ThemeType = {
  type: 'lightTheme'
};

export const themeSlice = createSlice({
  name: 'themeType',
  initialState,
  reducers: {
    triggerThemeType: state => {
      state.type = state.type === 'lightTheme' ? 'darkTheme' : 'lightTheme';
    }
  }
});

export const { triggerThemeType } = themeSlice.actions;

export default themeSlice.reducer;
