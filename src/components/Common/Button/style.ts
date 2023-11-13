import styled from 'styled-components';

import { devices } from '../../../constants';

export const StyledButton = styled.button`
  border-radius: 10px;
  background: #000;
  border: none;
  color: #fff;
  font-size: 16px;
  padding: 7px 14px;
  white-space: nowrap;
  width: fit-content;
  &:hover {
    cursor: pointer;
  }
  @media ${devices.tablet} {
    font-size: 20px;
  }
  @media ${devices.desktop} {
    width: 139px;
  }
`;
