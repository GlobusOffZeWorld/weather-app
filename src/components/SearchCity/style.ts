import { devices } from '@constants';
import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  padding: 49px 0 0;
  justify-content: space-between;
  gap: 14px;
  justify-content: space-between;
  @media ${devices.tablet} {
    padding: 49px 40px 0 33px;
    justify-content: space-between;
    gap: 28px;
  }
  @media ${devices.desktop} {
    flex-direction: row;
    max-width: 300px;
    padding: 0;
    flex-direction: column;
    align-items: center;
    gap: 17px;
  }
`;
