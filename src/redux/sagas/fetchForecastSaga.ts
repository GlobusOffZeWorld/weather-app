import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';

import { ForecastResponse } from '../../components/ForecastContainer';
import {
  forecastFetchError,
  forecastFetchRequest,
  forecastFetchSuccess,
  forecastPayloadType
} from '../slices/forecastSlice';

function* fetchForecastSaga({
  payload: { userLocation, startDate, endDate }
}: PayloadAction<forecastPayloadType>) {
  try {
    const API_ROOT = process.env.REACT_APP_DIALY_WEATHER_BASE_URL;

    const daysResponse: Response = yield call(
      fetch,
      `${API_ROOT}${userLocation.latitude},${
        userLocation.longitude
      }/${startDate}/${endDate}?key=${process.env
        .REACT_APP_API_KEY!}&include=days&elements=datetime,temp,conditions,icon&unitGroup=metric`
    );
    const daysResult: ForecastResponse = yield call(() => daysResponse.json());
    yield put(forecastFetchSuccess(daysResult.days));

    const hoursResponse: Response = yield call(
      fetch,
      `${API_ROOT}${userLocation.latitude},${userLocation.longitude}/next1days/?key=${process.env
        .REACT_APP_API_KEY!}&include=hours&elements=datetime,temp,conditions,icon&unitGroup=metric`
    );
    const hoursResult: ForecastResponse = yield call(() => hoursResponse.json());
    yield put(forecastFetchSuccess(hoursResult.days));
  } catch (error) {
    yield put(forecastFetchError(String(error)));
  }
}

export function* watchGetForecast() {
  yield takeLatest(forecastFetchRequest.toString(), fetchForecastSaga);
}
