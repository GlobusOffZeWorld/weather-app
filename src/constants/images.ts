import clearDayBackground from '../assets/backgrounds/clear-day.jpg';
import clearNightBackground from '../assets/backgrounds/clear-night.jpg';
import cloudyBackground from '../assets/backgrounds/cloudy.jpg';
import defaultImageBackground from '../assets/backgrounds/default.png';
import fogBackground from '../assets/backgrounds/fog.jpg';
import hailBackground from '../assets/backgrounds/hail.jpg';
import partlyCloudyDayBackground from '../assets/backgrounds/partly-cloudy-day.jpg';
import partlyCloudyNightBackground from '../assets/backgrounds/partly-cloudy-night.jpg';
import rainBackground from '../assets/backgrounds/rain.jpg';
import rainSnowBackground from '../assets/backgrounds/rain-snow.jpg';
import rainSnowShowersDayBackground from '../assets/backgrounds/rain-snow-showers-day.jpg';
import rainSnowShowersNightBackground from '../assets/backgrounds/rain-snow-showers-night.jpg';
import showersDayBackground from '../assets/backgrounds/showers-day.jpg';
import showersNightBackground from '../assets/backgrounds/showers-night.jpg';
import sleetBackground from '../assets/backgrounds/sleet.jpeg';
import snowBackground from '../assets/backgrounds/snow.jpg';
import snowShowersDayBackground from '../assets/backgrounds/snow-showers-day.jpg';
import snowShowersNightBackground from '../assets/backgrounds/snow-showers-night.jpg';
import thunderBackground from '../assets/backgrounds/thunder.jpg';
import thunderShowersDayBackground from '../assets/backgrounds/thunder-showers-day.jpg';
import thunderShowersNightBackground from '../assets/backgrounds/thunder-showers-night.jpg';
import windBackground from '../assets/backgrounds/wind.jpg';
import clearDayIcon from '../assets/weatherIcons/clear-day.png';
import clearNightIcon from '../assets/weatherIcons/clear-night.png';
import cloudyIcon from '../assets/weatherIcons/cloudy.png';
import defaultImageIcon from '../assets/weatherIcons/default.svg';
import fogIcon from '../assets/weatherIcons/fog.png';
import hailIcon from '../assets/weatherIcons/hail.png';
import partlyCloudyDayIcon from '../assets/weatherIcons/partly-cloudy-day.png';
import partlyCloudyNightIcon from '../assets/weatherIcons/partly-cloudy-night.png';
import rainIcon from '../assets/weatherIcons/rain.png';
import rainSnowIcon from '../assets/weatherIcons/rain-snow.png';
import rainSnowShowersDayIcon from '../assets/weatherIcons/rain-snow-showers-day.png';
import rainSnowShowersNightIcon from '../assets/weatherIcons/rain-snow-showers-night.png';
import showersDayIcon from '../assets/weatherIcons/showers-day.png';
import showersNightIcon from '../assets/weatherIcons/showers-night.png';
import sleetIcon from '../assets/weatherIcons/sleet.png';
import snowIcon from '../assets/weatherIcons/snow.png';
import snowShowersDayIcon from '../assets/weatherIcons/snow-showers-day.png';
import snowShowersNightIcon from '../assets/weatherIcons/snow-showers-night.png';
import thunderIcon from '../assets/weatherIcons/thunder.png';
import thunderShowersDayIcon from '../assets/weatherIcons/thunder-showers-day.png';
import thunderShowersNightIcon from '../assets/weatherIcons/thunder-showers-night.png';
import windIcon from '../assets/weatherIcons/wind.png';

type imagesType = {
  [index: string]: {
    background: string;
    icon: string;
  };
};

export const images: imagesType = {
  wind: {
    background: windBackground,
    icon: windIcon
  },
  thunder: {
    background: thunderBackground,
    icon: thunderIcon
  },
  thunderShowersDay: {
    background: thunderShowersDayBackground,
    icon: thunderShowersDayIcon
  },
  thunderShowersNight: {
    background: thunderShowersNightBackground,
    icon: thunderShowersNightIcon
  },
  snow: {
    background: snowBackground,
    icon: snowIcon
  },
  snowShowersDay: {
    background: snowShowersDayBackground,
    icon: snowShowersDayIcon
  },
  snowShowersNight: {
    background: snowShowersNightBackground,
    icon: snowShowersNightIcon
  },
  sleet: {
    background: sleetBackground,
    icon: sleetIcon
  },
  showersDay: {
    background: showersDayBackground,
    icon: showersDayIcon
  },
  showersNight: {
    background: showersNightBackground,
    icon: showersNightIcon
  },
  rain: {
    background: rainBackground,
    icon: rainIcon
  },
  rainSnow: {
    background: rainSnowBackground,
    icon: rainSnowIcon
  },
  rainSnowShowersDay: {
    background: rainSnowShowersDayBackground,
    icon: rainSnowShowersDayIcon
  },
  rainSnowShowersNight: {
    background: rainSnowShowersNightBackground,
    icon: rainSnowShowersNightIcon
  },
  partlyCloudyDay: {
    background: partlyCloudyDayBackground,
    icon: partlyCloudyDayIcon
  },
  partlyCloudyNight: {
    background: partlyCloudyNightBackground,
    icon: partlyCloudyNightIcon
  },
  hail: {
    background: hailBackground,
    icon: hailIcon
  },
  fog: {
    background: fogBackground,
    icon: fogIcon
  },
  cloudy: {
    background: cloudyBackground,
    icon: cloudyIcon
  },
  clearDay: {
    background: clearDayBackground,
    icon: clearDayIcon
  },
  clearNight: {
    background: clearNightBackground,
    icon: clearNightIcon
  },
  defaultImage: {
    background: defaultImageBackground,
    icon: defaultImageIcon
  }
};
