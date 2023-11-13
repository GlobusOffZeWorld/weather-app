import { devices } from '@constants';
import styled from 'styled-components';

export const Wrapper = styled.div`
  flex-direction: row;
  justify-self: start;
  display: flex;
  width: 75%;
  max-height: 320px;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  flex-grow: 1;
  @media ${devices.tablet} {
    max-height: 460px;
  }
  @media ${devices.desktop} {
    width: 100%;
    flex-wrap: nowrap;
    background: rgba(217, 217, 217, 0.2);
    max-height: 216px;
    padding: 18px 70px 16px 39px;
    gap: 39px;
    height: 100%;
  }
`;
