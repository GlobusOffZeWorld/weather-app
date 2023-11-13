import { FC } from 'react';

import { images } from '../../constants/images';
import { WeatherCardProps } from '../../types/models';
import { pickImage } from '../../utils';
import { ForecastText, Title, WeatherIcon, Wrapper } from './style';

export const WeatherCard: FC<WeatherCardProps> = ({ title, temp, icon }) => (
  <Wrapper data-cy="weather-card">
    <Title>{title}</Title>
    <WeatherIcon src={images[pickImage(icon)].icon || images['defaultIcon'].icon} />
    <ForecastText>{Math.round(temp)}°</ForecastText>
  </Wrapper>
);
