import { devices } from '@constants';
import styled from 'styled-components';

export const StyledInput = styled.input`
  border-radius: 5px;
  background: ${({ theme }) => theme.buttonText};
  width: 100%;
  height: 38px;
  border: none;
  padding: 3px 14px;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  min-width: 120px;
  @media ${devices.tablet} {
    font-size: 22px;
    min-width: 200px;
  }
`;
