import { Button } from '@components/Common';
import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { triggerThemeType } from '@/redux/slices/themeSlice';

import { Wrapper } from './style';

export const ThemeTypeSelector: FC = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => dispatch(triggerThemeType());

  return (
    <Wrapper>
      <Button
        datatype={'theme-type-selector'}
        onClick={handleOnClick}
      >
        Theme
      </Button>
    </Wrapper>
  );
};
