import { images } from '@constants';
import { pickImage } from '@utils/pickImage';
import { FC } from 'react';

import { WeatherCardProps } from '@/types/models';

import { ForecastText, Title, WeatherIcon, Wrapper } from './style';

export const WeatherCard: FC<WeatherCardProps> = ({ title, temp, icon }) => (
  <Wrapper data-cy="weather-card">
    <Title>{title}</Title>
    <WeatherIcon src={images[pickImage(icon)].icon || images['defaultIcon'].icon} />
    <ForecastText>{Math.round(temp)}°</ForecastText>
  </Wrapper>
);
