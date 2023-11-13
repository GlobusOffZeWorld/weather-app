import styled from 'styled-components';

import { devices } from '../../constants';

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
