import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setUserLocation } from '../redux/slices/userLocationSlice';

export const useCurrentUserLocation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            dispatch(setUserLocation({ cityName: 'Current position', latitude, longitude }));
          },
          error => console.error('Error getting user location', error)
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };
    getUserLocation();
  }, []);
};
