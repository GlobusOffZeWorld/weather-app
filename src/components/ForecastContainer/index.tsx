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

export interface ForecastResponse {
  days: DayWeather[];
}

export const ForecastContainer: FC<LayoutProps> = () => {
  const forecast = useSelector((state: RootState) => state.forecast.data);
  const userLocation = useSelector((state: RootState) => state.userLocation);
  const forecastType = useSelector((state: RootState) => state.forecastType.type);
  const dispatch = useDispatch();

  const [currentForecastView, setCurrentForecastView] = useState<DayWeather[]>([...forecast]);

  useEffect(() => {
    if (forecastType === 'Hourly') {
      if (forecast[0].hours) {
        setCurrentForecastView(
          forecast[0].hours.slice(0, FORECAST_LENGTH).map((weather, index) => {
            const currentWeather = { ...weather };
            currentWeather.datetime =
              index !== 0 ? weather.datetime.split(':').slice(0, -1).join(':') : 'Now';
            return currentWeather;
          })
        );
      }
    } else {
      setCurrentForecastView(
        forecast.slice(0, FORECAST_LENGTH).map((weather, index) => {
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
  }, [forecastType, forecast]);

  useEffect(() => {
    if (userLocation.latitude && userLocation.longitude) {
      let isCacheOutOfDate = false;
      if (forecastType === 'Daily') {
        const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;
        isCacheOutOfDate =
          Date.now() - new Date(forecast[0].datetime).getTime() > MILLISECONDS_IN_DAY;
      } else if (forecast[0].hours) {
        isCacheOutOfDate = +new Date().getHours() > +forecast[0].hours[0].datetime.split(':')[0];
      }

      if (forecast.length < 2 || isCacheOutOfDate) {
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
