import styled from 'styled-components';

import { devices } from '../../constants';

export const SearchContainer = styled.div`
  display: flex;
  width: 260px;
  padding: 49px 0 0;
  gap: 14px;
  @media ${devices.tablet} {
    width: 400px;
    padding: 49px 80px 0 33px;
    justify-content: space-between;
    gap: 28px;
  }
  @media ${devices.desktop} {
    flex-direction: row;
    max-width: 400px;
    padding: 0;
    flex-direction: column;
    align-items: center;
    gap: 17px;
  }
`;
