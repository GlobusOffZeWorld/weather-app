import { DayWeather, ForecastPayloadType } from './models';

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
