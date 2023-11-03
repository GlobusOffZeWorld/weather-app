import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface userLocationType {
  latitude: number;
  longitude: number;
}

const initialState: userLocationType = {
  latitude: 53.8940504,
  longitude: 27.5472473
}

export const userLocationSlice = createSlice({
  name: 'userLocation',
  initialState,
  reducers: {
    setUserLocation: (state, { payload: { latitude, longitude } }: PayloadAction<userLocationType>) => {
      state.latitude = latitude
      state.longitude = longitude
    }
  },
})

export const { setUserLocation } = userLocationSlice.actions

export default userLocationSlice.reducer