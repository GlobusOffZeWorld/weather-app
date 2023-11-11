import styled from 'styled-components';

import { devices } from '../../constants';

export const H1 = styled.p`
  color: #000;
  text-align: center;
  font-size: 20px;
  @media ${devices.tablet} {
    font-size: 30px;
  }

  @media ${devices.desktop} {
    font-size: 41px;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media ${devices.desktop} {
    align-items: start;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 33px;
  @media ${devices.tablet} {
    width: 420px;
  }
  @media ${devices.desktop} {
    flex-direction: row;
    width: 985px;
    justify-content: space-between;
  }
`;
