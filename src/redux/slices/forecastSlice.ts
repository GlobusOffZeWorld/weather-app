import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { DayWeather } from '../../components/WeatherCard';
import { userLocationType } from './userLocationSlice';

interface forecastStateType {
  data: DayWeather[];
  isLoading: boolean;
  errors: string;
}

export interface forecastPayloadType {
  userLocation: userLocationType;
  startDate: string;
  endDate: string;
}

const initialState: forecastStateType = {
  data: [
    {
      datetime: '',
      temp: 0,
      conditions: '',
      icon: ''
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
      { payload: { userLocation, startDate, endDate } }: PayloadAction<forecastPayloadType>
    ) => {
      state.isLoading = true;
      state.errors = '';
    },
    forecastFetchSuccess: (state, { payload: forecast }: PayloadAction<DayWeather[]>) => {
      if (forecast[0].hours && forecast[1].hours) {
        const currentTime = new Date().getHours();
        state.data[0].hours = [
          ...forecast[0].hours.slice(currentTime),
          ...forecast[1].hours.slice(0, currentTime)
        ];
      } else {
        state.data = [...forecast];
      }
      state.isLoading = false;
    },
    forecastFetchError: (state, { payload: error }: PayloadAction<string>) => {
      state.isLoading = false;
      state.errors = error;
    }
  }
});

export const { forecastFetchRequest, forecastFetchSuccess, forecastFetchError } =
  forecastSlice.actions;
export default forecastSlice.reducer;
