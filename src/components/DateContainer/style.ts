import { devices } from '@constants';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media ${devices.desktop} {
    align-items: start;
  }
`;

export const H1 = styled.p`
  color: ${({ theme }) => theme.text};
  text-align: center;
  font-size: 20px;
  @media ${devices.tablet} {
    font-size: 30px;
  }

  @media ${devices.desktop} {
    font-size: 41px;
  }
`;
