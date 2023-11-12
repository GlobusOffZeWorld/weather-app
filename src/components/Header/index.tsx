import { FC } from 'react';

import { DateContainer } from '../DateContainer';
import { SearchCity } from '../SearchCity';
import { Wrapper } from './style';

export const Header: FC = () => (
  <Wrapper>
    <DateContainer />
    <SearchCity />
  </Wrapper>
);
