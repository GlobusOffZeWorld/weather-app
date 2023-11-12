import { FC } from 'react';

import { icons } from '../../constants/icons';
import { pickImage } from '../../utils';
import { ForecastText, Title, WeatherIcon, Wrapper } from './style';

export interface DayWeather {
  datetime: string;
  temp: number;
  conditions: string;
  icon: string;
  hours?: {
    datetime: string;
    conditions: string;
    temp: number;
    icon: string;
  }[];
}

export interface WeatherCardProps extends DayWeather {
  title: string;
}

export const WeatherCard: FC<WeatherCardProps> = ({ title, temp, icon }) => (
  <Wrapper data-cy="weather-card">
    <Title>{title}</Title>
    <WeatherIcon src={icons[pickImage(icon)] || icons['defaultIcon']} />
    <ForecastText>{Math.round(temp)}°</ForecastText>
  </Wrapper>
);