import { DayWeather } from '../components/WeatherCard';
import { ForecastPayloadType } from '../redux/slices/forecastSlice';

export type ForecastResponse = DayWeather[];
export type HourlyForecastProps = Omit<ForecastPayloadType, 'startDate' | 'endDate'>;

export type hourlyForecastResponse = {
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
    main: string;
  }[];
};
