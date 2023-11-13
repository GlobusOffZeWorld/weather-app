import clearDayBackground from '../assets/backgrounds/clear-day.jpg';
import cloudyBackground from '../assets/backgrounds/cloudy.jpg';
import defaultImageBackground from '../assets/backgrounds/default.png';
import fogBackground from '../assets/backgrounds/fog.jpg';
import hailBackground from '../assets/backgrounds/hail.jpg';
import rainBackground from '../assets/backgrounds/rain.jpg';
import snowBackground from '../assets/backgrounds/snow.jpg';
import thunderBackground from '../assets/backgrounds/thunder.jpg';
import windBackground from '../assets/backgrounds/wind.jpg';
import clearDayIcon from '../assets/weatherIcons/clear-day.png';
import cloudyIcon from '../assets/weatherIcons/cloudy.png';
import defaultImageIcon from '../assets/weatherIcons/default.svg';
import fogIcon from '../assets/weatherIcons/fog.png';
import hailIcon from '../assets/weatherIcons/hail.png';
import rainIcon from '../assets/weatherIcons/rain.png';
import snowIcon from '../assets/weatherIcons/snow.png';
import thunderIcon from '../assets/weatherIcons/thunder.png';
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
  snow: {
    background: snowBackground,
    icon: snowIcon
  },
  rain: {
    background: rainBackground,
    icon: rainIcon
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
  clear: {
    background: clearDayBackground,
    icon: clearDayIcon
  },
  thunder: {
    background: thunderBackground,
    icon: thunderIcon
  },
  defaultImage: {
    background: defaultImageBackground,
    icon: defaultImageIcon
  }
};
