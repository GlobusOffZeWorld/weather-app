import { DateContainer, SearchCity } from '@components';
import { FC } from 'react';

import { Wrapper } from './style';

export const Header: FC = () => (
  <Wrapper>
    <DateContainer />
    <SearchCity />
  </Wrapper>
);
