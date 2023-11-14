import { devices } from '@constants';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 33px;
  @media ${devices.tablet} {
    width: 500px;
  }
  @media ${devices.desktop} {
    flex-direction: row;
    width: 1000px;
    justify-content: space-between;
  }
`;
