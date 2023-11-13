import { createSlice } from '@reduxjs/toolkit';

import { IntervalType } from '../../types/models';

const initialState: IntervalType = {
  type: 'Daily'
};

export const forecastTypeSlice = createSlice({
  name: 'forecastType',
  initialState,
  reducers: {
    triggerForecastType: state => {
      state.type = state.type === 'Daily' ? 'Hourly' : 'Daily';
    }
  }
});

export const { triggerForecastType } = forecastTypeSlice.actions;

export default forecastTypeSlice.reducer;
