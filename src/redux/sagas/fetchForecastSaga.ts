import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

import { getRequiredHourlyProperties } from '../../api/APIUtils';
import { getDailyForecast, getHourlyForecast } from '../../api/ForecastAPI';
import { hourlyForecastResponse } from '../../types/api';
import { DayWeather, ForecastPayloadType } from '../../types/models';
import {
  dailyForecastFetchSuccess,
  forecastFetchError,
  forecastFetchRequest,
  hourlyForecastFetchSuccess
} from '../slices/forecastSlice';

function* fetchForecastSaga({
  payload: {
    userLocation: { latitude, longitude },
    startDate,
    endDate
  }
}: PayloadAction<ForecastPayloadType>) {
  try {
    const dailyPayload = {
      userLocation: { latitude, longitude },
      startDate,
      endDate
    };
    const daysResult: DayWeather[] = yield call(getDailyForecast, dailyPayload);
    yield put(dailyForecastFetchSuccess(daysResult));

    const hourlyPayload = {
      userLocation: { latitude, longitude }
    };
    const hoursResponse: hourlyForecastResponse[] = yield call(getHourlyForecast, hourlyPayload);
    const hoursResult = getRequiredHourlyProperties(hoursResponse);

    yield put(hourlyForecastFetchSuccess(hoursResult));
  } catch (error) {
    yield put(forecastFetchError(String(error)));
  }
}

export function* watchGetForecast() {
  yield takeLatest(forecastFetchRequest.toString(), fetchForecastSaga);
}
