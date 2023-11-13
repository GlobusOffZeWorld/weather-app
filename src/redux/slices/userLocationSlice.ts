import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { UserLocationType } from '../../types/models';

const initialState: UserLocationType = {
  cityName: '',
  latitude: 0,
  longitude: 0
};

export const userLocationSlice = createSlice({
  name: 'userLocation',
  initialState,
  reducers: {
    setUserLocation: (
      state,
      { payload: { cityName, latitude, longitude } }: PayloadAction<UserLocationType>
    ) => {
      state.cityName = cityName;
      state.latitude = latitude;
      state.longitude = longitude;
    }
  }
});

export const { setUserLocation } = userLocationSlice.actions;

export default userLocationSlice.reducer;
