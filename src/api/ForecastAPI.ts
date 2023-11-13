import { HourlyForecastProps } from '../types/api';
import { ForecastPayloadType } from '../types/models';

export const getDailyForecast = async ({
  userLocation: { latitude, longitude },
  startDate,
  endDate
}: ForecastPayloadType) => {
  const API_ROOT = process.env.REACT_APP_DIALY_WEATHER_BASE_URL;

  const response = await fetch(
    `${API_ROOT}${latitude},${longitude}/${startDate}/${endDate}?key=${process.env
      .REACT_APP_DIALY_WEATHER_API_KEY!}&include=days&elements=datetime,temp,conditions,icon&unitGroup=metric`
  );
  const data = await response.json();
  return data.days;
};

export const getHourlyForecast = async ({
  userLocation: { latitude, longitude }
}: HourlyForecastProps) => {
  const API_ROOT = process.env.REACT_APP_3HOURLY_WEATHER_BASE_URL;

  const response = await fetch(
    `${API_ROOT}forecast?cnt=8&units=metric&lat=${latitude}&lon=${longitude}&appid=${process.env
      .REACT_APP_3HOURLY_WEATHER_API_KEY!}`
  );
  const data = await response.json();

  return data.list;
};
