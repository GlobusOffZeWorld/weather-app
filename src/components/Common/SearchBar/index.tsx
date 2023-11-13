import { FC } from 'react';

import { SearchBarProps } from '../../../types/models';
import { StyledInput } from './style';

export const SearchBar: FC<SearchBarProps> = ({ forwardedRef, ...inputProps }) => (
  <StyledInput
    data-cy="search-bar"
    ref={forwardedRef}
    {...inputProps}
  />
);
