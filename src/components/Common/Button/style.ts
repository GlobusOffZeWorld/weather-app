import { devices } from '@constants';
import styled from 'styled-components';

import { COLORS } from '@/components/Theme/colors';

export const StyledButton = styled.button`
  border-radius: 10px;
  background: ${({ theme }) => theme.buttonColor};
  border: none;
  color: ${({ theme }) => theme.buttonText};
  font-size: 16px;
  padding: 7px 14px;
  white-space: nowrap;
  width: fit-content;
  transition: background-color 0.2s;

  &:hover {
    cursor: pointer;
    background-color: ${COLORS.gray};
    transition: background-color 0.2s;
  }

  @media ${devices.tablet} {
    font-size: 20px;
  }
  @media ${devices.desktop} {
    width: 139px;
  }
`;
