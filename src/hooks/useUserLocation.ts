import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setUserLocation } from '@/redux/slices/userLocationSlice';
import { RootState } from '@/redux/store';

export const useCurrentUserLocation = () => {
  const userLocation = useSelector((state: RootState) => state.userLocation);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserLocation = async () => {
      if (userLocation.cityName === '') {
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
      }
    };
    getUserLocation();
  }, []);
};
