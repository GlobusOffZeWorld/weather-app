import '@elastic/react-search-ui-views/lib/styles/styles.css';

import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import { SearchCity } from '../SearchCity';
import { DateContainer, H1, Wrapper } from './style';

export const Header: FC = () => {
  const userLocation = useSelector((state: RootState) => state.userLocation);

  const [currentTime, setCurrentTime] = useState<string>(
    new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
  );

  const [date, setDate] = useState<string>(
    new Date().toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        })
      );
      setDate(
        new Date().toLocaleDateString('en-GB', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <DateContainer>
        <H1>
          {currentTime} {userLocation.cityName}
        </H1>
        <H1>{date}</H1>
      </DateContainer>
      <SearchCity />
    </Wrapper>
  );
};
