import { FC } from "react";
import { ForecastText, Title, WeatherIcon, Wrapper } from "./style";
import { icons, pickImage } from "../../utils";

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
  title: string
}

export const WeatherCard: FC<WeatherCardProps> = ({ title, temp, icon }) => {

  return (
  <Wrapper>
    <Title>{title}</Title>
    <WeatherIcon src={icons[pickImage(icon)] || icons['defaultIcon']} />
    <ForecastText>{Math.round(temp)}°</ForecastText>
  </Wrapper>
)}
