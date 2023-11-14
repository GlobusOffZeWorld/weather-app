import { WeatherCard } from '@components';
import { FORECAST_LENGTH, MILLISECONDS_IN_DAY } from '@constants';
import { useCurrentUserLocation } from '@hooks';
import { formatDate } from '@utils/dateUtils';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { forecastFetchRequest } from '@/redux/slices/forecastSlice';
import { RootState } from '@/redux/store';
import { DayWeather, LayoutProps } from '@/types/models';

import { Wrapper } from './style';

export const ForecastContainer: FC<LayoutProps> = () => {
  const dailyForecast = useSelector((state: RootState) => state.forecast.dailyData);
  const hourlyForecast = useSelector((state: RootState) => state.forecast.hourlyData);
  const userLocation = useSelector((state: RootState) => state.userLocation);
  const forecastType = useSelector((state: RootState) => state.forecastType.type);
  const dispatch = useDispatch();

  const [currentForecastView, setCurrentForecastView] = useState<DayWeather[]>([...dailyForecast]);

  useCurrentUserLocation();

  useEffect(() => {
    if (forecastType === 'Hourly') {
      if (hourlyForecast) {
        setCurrentForecastView(
          hourlyForecast.slice(0, FORECAST_LENGTH).map((weather, index: number) => {
            const currentWeather = { ...weather };
            currentWeather.datetime =
              index !== 0 ? weather.datetime.split(':').slice(0, -1).join(':') : 'Now';
            return currentWeather;
          })
        );
      }
    } else {
      setCurrentForecastView(
        dailyForecast.slice(0, FORECAST_LENGTH).map((weather, index: number) => {
          const currentWeather = { ...weather };
          currentWeather.datetime =
            index !== 0
              ? new Date(weather.datetime).toLocaleDateString('en-GB', {
                  weekday: 'long'
                })
              : 'Today';
          return currentWeather;
        })
      );
    }
  }, [forecastType, dailyForecast]);

  useEffect(() => {
    if (userLocation.latitude && userLocation.longitude) {
      let isCacheOutOfDate = false;
      if (forecastType === 'Daily') {
        isCacheOutOfDate =
          Date.now() - new Date(dailyForecast[0].datetime).getTime() > MILLISECONDS_IN_DAY;
      } else if (hourlyForecast) {
        const HOURS_IN_INTERVAL = 3;
        isCacheOutOfDate =
          Number(new Date().getHours()) - Number(hourlyForecast[0].datetime.split(':')[0]) >
          HOURS_IN_INTERVAL;
      }

      if (dailyForecast.length < 2 || isCacheOutOfDate) {
        const startDate = new Date();
        const endDate = new Date();
        endDate.setDate(startDate.getDate() + FORECAST_LENGTH);
        dispatch(
          forecastFetchRequest({
            userLocation,
            startDate: formatDate(startDate),
            endDate: formatDate(endDate)
          })
        );
      }
    }
  }, [userLocation]);

  return (
    <Wrapper data-cy="forecast">
      {currentForecastView.map(weather => (
        <WeatherCard
          key={weather.datetime}
          title={weather.datetime}
          {...weather}
        />
      ))}
    </Wrapper>
  );
};
