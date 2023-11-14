import { devices } from '@constants';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  height: 33%;
  justify-content: start;
  gap: 2px;

  @media ${devices.tablet} {
    gap: 8px;
  }

  @media ${devices.desktop} {
    height: 100%;
    width: 100%;

    &:first-child {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      justify-items: center;
      gap: 14px;

      min-width: 269px;
      flex-direction: row;
      flex-wrap: wrap;
      & > img {
        order: -1;
        grid-row-start: 1;
        grid-row-end: 3;
        min-width: 137px;
      }
      & > p {
        font-size: 29px;
        &:first-child {
          align-self: end;
        }
        &:last-child {
          align-self: start;
        }
      }
    }
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.text};
  font-family: Inter;
  font-size: 12px;
  @media ${devices.tablet} {
    font-size: 18px;
  }
`;

export const WeatherIcon = styled.img`
  width: 100%;
  max-width: 48px;
  max-height: 100%;
  @media ${devices.tablet} {
    padding: 8px 0 8px;
    max-width: 64px;
  }
  @media ${devices.desktop} {
    max-width: 84px;
    max-height: 100%;
  }
`;

export const ForecastText = styled.p`
  color: ${({ theme }) => theme.text};
  font-family: Inter;
  font-size: 16px;
  @media ${devices.tablet} {
    font-size: 22px;
  }
`;
