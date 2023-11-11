import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface userLocationType {
  cityName?: string;
  latitude: number;
  longitude: number;
}

const initialState: userLocationType = {
  cityName: '',
  latitude: 53.8940504,
  longitude: 27.5472473
};

export const userLocationSlice = createSlice({
  name: 'userLocation',
  initialState,
  reducers: {
    setUserLocation: (
      state,
      { payload: { cityName, latitude, longitude } }: PayloadAction<userLocationType>
    ) => {
      state.cityName = cityName;
      state.latitude = latitude;
      state.longitude = longitude;
    }
  }
});

export const { setUserLocation } = userLocationSlice.actions;

export default userLocationSlice.reducer;
