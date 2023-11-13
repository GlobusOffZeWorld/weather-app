import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { DayWeather, ForecastPayloadType, ForecastStateType } from '@/types/models';

const initialState: ForecastStateType = {
  dailyData: [
    {
      datetime: '',
      temp: 0,
      conditions: '',
      icon: 'defaultImage'
    }
  ],
  hourlyData: [
    {
      datetime: '',
      temp: 0,
      conditions: '',
      icon: 'defaultImage'
    }
  ],
  isLoading: false,
  errors: ''
};

export const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    forecastFetchRequest: (
      state,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      { payload: { userLocation, startDate, endDate } }: PayloadAction<ForecastPayloadType>
    ) => {
      state.isLoading = true;
      state.errors = '';
    },
    dailyForecastFetchSuccess: (state, { payload: forecast }: PayloadAction<DayWeather[]>) => {
      state.dailyData = [...forecast];
      state.isLoading = false;
    },
    hourlyForecastFetchSuccess: (state, { payload: forecast }: PayloadAction<DayWeather[]>) => {
      state.hourlyData = [...forecast];
      state.isLoading = false;
    },
    forecastFetchError: (state, { payload: error }: PayloadAction<string>) => {
      state.isLoading = false;
      state.errors = error;
    }
  }
});

export const {
  forecastFetchRequest,
  dailyForecastFetchSuccess,
  hourlyForecastFetchSuccess,
  forecastFetchError
} = forecastSlice.actions;
export default forecastSlice.reducer;
