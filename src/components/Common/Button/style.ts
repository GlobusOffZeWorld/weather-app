import { devices } from '@constants';
import styled from 'styled-components';

export const StyledButton = styled.button`
  border-radius: 10px;
  background: #000;
  border: none;
  color: #fff;
  font-size: 16px;
  padding: 7px 14px;
  white-space: nowrap;
  width: fit-content;
  transition: background-color 0.2s;

  &:hover {
    cursor: pointer;
    background-color: #6e6e6e;
    transition: background-color 0.2s;
  }

  @media ${devices.tablet} {
    font-size: 20px;
  }
  @media ${devices.desktop} {
    width: 139px;
  }
`;
