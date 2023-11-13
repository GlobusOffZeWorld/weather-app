import { useCurrentDateTime } from '@hooks';
import { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/redux/store';

import { H1, Wrapper } from './style';

export const DateContainer: FC = () => {
  const userLocation = useSelector((state: RootState) => state.userLocation);
  const [currentTime, date] = useCurrentDateTime();

  return (
    <Wrapper>
      <H1>
        {currentTime} {userLocation.cityName}
      </H1>
      <H1>{date}</H1>
    </Wrapper>
  );
};
