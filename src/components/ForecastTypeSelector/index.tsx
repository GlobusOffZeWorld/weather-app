import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { triggerForecastType } from '../../redux/slices/forecastTypeSlice';
import { RootState } from '../../redux/store';
import { Button } from '../Common';
import { Wrapper } from './style';

export const ForecastTypeSelector: FC = () => {
  const forecastType = useSelector((state: RootState) => state.forecastType.type);
  const dispatch = useDispatch();

  const handleOnClick = () => dispatch(triggerForecastType());

  return (
    <Wrapper>
      <Button
        datatype={'forecast-type-selector'}
        onClick={handleOnClick}
      >
        {forecastType}
      </Button>
    </Wrapper>
  );
};
