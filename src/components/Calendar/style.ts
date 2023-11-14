import { devices } from '@constants';
import styled from 'styled-components';

export const CalendarEventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 19px;
`;

export const CalendarMessage = styled.div`
  display: flex;
  gap: 26px;
  align-items: center;
`;

export const TimeBubble = styled.div`
  display: flex;
  border-radius: 20px;
  background: ${({ theme }) => theme.timeBubble};
  color: ${({ theme }) => theme.buttonText};
  font-size: 18px;
  padding: 8px;
  width: 64px;
  justify-content: center;
  align-items: end;
`;

export const MessageText = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 23px;
`;

export const AuthorizationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media ${devices.desktop} {
    flex-direction: row;
    justify-content: center;
    gap: 48px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: start;
  width: 100%;
  align-items: center;
  min-height: 140px;
  @media ${devices.desktop} {
    width: 50%;
    flex-direction: column-reverse;
    align-items: start;
    gap: 34px;
  }
`;
