import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FORECAST_LENGTH } from '../../constants';
import { forecastFetchRequest } from '../../redux/slices/forecastSlice';
import { RootState } from '../../redux/store';
import { formatDate } from '../../utils/dateUtils';
import { DayWeather, WeatherCard } from '../WeatherCard';
import { Wrapper } from './style';

interface LayoutProps {
  children?: React.ReactNode;
}

export const ForecastContainer: FC<LayoutProps> = () => {
  const dailyForecast = useSelector((state: RootState) => state.forecast.dailyData);
  const hourlyForecast = useSelector((state: RootState) => state.forecast.hourlyData);
  const userLocation = useSelector((state: RootState) => state.userLocation);
  const forecastType = useSelector((state: RootState) => state.forecastType.type);
  const dispatch = useDispatch();
  console.log('rerendered');

  const [currentForecastView, setCurrentForecastView] = useState<DayWeather[]>([...dailyForecast]);

  useEffect(() => {
    if (forecastType === 'Hourly') {
      setCurrentForecastView(
        hourlyForecast.slice(0, FORECAST_LENGTH).map((weather, index) => {
          const currentWeather = { ...weather };
          currentWeather.datetime =
            index !== 0 ? weather.datetime.split(':').slice(0, -1).join(':') : 'Now';
          return currentWeather;
        })
      );
    } else {
      setCurrentForecastView(
        dailyForecast.slice(0, FORECAST_LENGTH).map((weather, index) => {
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
        const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;
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
