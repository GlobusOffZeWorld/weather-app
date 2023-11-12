import { combineReducers } from '@reduxjs/toolkit';

import calendarReducer from './slices/calendarSlice';
import forecastReducer from './slices/forecastSlice';
import forecastTypeReducer from './slices/forecastTypeSlice';
import userLocationReducer from './slices/userLocationSlice';

const rootReducer = combineReducers({
  forecast: forecastReducer,
  forecastType: forecastTypeReducer,
  userLocation: userLocationReducer,
  calendar: calendarReducer
});

export default rootReducer;
