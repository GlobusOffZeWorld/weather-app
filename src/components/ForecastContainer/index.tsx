import { FC, useEffect, useState } from "react";
import { WeatherCard, DayWeather } from "../WeatherCard"
import { FORECAST_LENGTH } from "../../constants"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { forecastFetchRequest } from "../../redux/slices/forecastSlice";
import { setUserLocation } from "../../redux/slices/userLocationSlice";
import { Wrapper } from "./style";
import { formatDate } from "../../utils/formatDate";

interface LayoutProps {
  children?: React.ReactNode;
}

export interface ForecastResponse {
  days: DayWeather[];
}

export const ForecastContainer: FC<LayoutProps> = () => {
  const forecast = useSelector((state: RootState) => state.forecast.data)
  const userLocation = useSelector((state: RootState) => state.userLocation)
  const forecastType = useSelector((state: RootState) => state.forecastType.type)
  const dispatch = useDispatch()

  const [currentForecastView, setCurrentForecastView] = useState<DayWeather[]>([...forecast])

  useEffect(() => {
    const getUserLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            dispatch(setUserLocation({ latitude, longitude }));
          },
          (error) => {
            console.error('Error getting user location');
          }
        );
      }
      else {
        console.error('Geolocation is not supported by this browser.');
      }
    };
    getUserLocation()
  }, [])

  useEffect(() => {
    if (forecastType === 'Hourly') {
      if (forecast[0].hours) {
        setCurrentForecastView(forecast[0].hours.slice(0, FORECAST_LENGTH).map((weather, index) => {
          const currentWeather = { ...weather }
          currentWeather.datetime = (index !== 0) ? weather.datetime.split(":").slice(0, -1).join(":") : 'Now'
          return currentWeather
        }))
      }
    } else {
      setCurrentForecastView(forecast.slice(0, FORECAST_LENGTH).map((weather, index) => {
        const currentWeather = { ...weather }
        currentWeather.datetime = (index !== 0) ? new Date(weather.datetime).toLocaleDateString("en-GB", {
          weekday: 'long'
        }) : 'Today';
        return currentWeather
      }))
    }
  }, [forecastType, forecast])

  useEffect(() => {
    if (userLocation.latitude && userLocation.longitude) {
      let isCacheOutOfDate = false
      if (forecastType === 'Daily') {
        isCacheOutOfDate = (Date.now() - new Date(forecast[0].datetime).getTime() > 24 * 60 * 60 * 1000)
      } else if (forecast[0].hours) {
        isCacheOutOfDate = ((+new Date().getHours()) > (+forecast[0].hours[0].datetime.split(':')[0]))
      }

      if (forecast.length < 2 || isCacheOutOfDate) {
        const startDate = new Date()
        const endDate = new Date()
        endDate.setDate(startDate.getDate() + FORECAST_LENGTH)
        dispatch(forecastFetchRequest({ userLocation, startDate: formatDate(startDate), endDate: formatDate(endDate) }))
      }
    }
  }, [userLocation])

  return (
    <Wrapper>
      {currentForecastView.map((weather, index) => {
        return <WeatherCard key={index} title={weather.datetime} {...weather} />
      })}
    </Wrapper>
  )
}