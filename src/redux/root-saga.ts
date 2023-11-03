import { all, fork } from "redux-saga/effects";
import { watchGetForecast } from "./sagas/fetchForecastSaga";

const rootSaga = function* () {
  yield all([
    fork(watchGetForecast),
  ])
}

export default rootSaga