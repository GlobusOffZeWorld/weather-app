import { devices } from '@constants';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(8px);
  background: ${({ theme }) => theme.background};
  height: 100%;
  width: 100%;
  gap: 10px;
  max-width: 1147px;
  min-height: 800px;
  padding: 13px 12px;
  flex-grow: 1;
  transition: background 0.2s;
  @media ${devices.desktop} {
    min-height: 0;
    height: 674px;
    gap: 34px;
    padding: 0;
  }
`;

export const InfoSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${devices.desktop} {
    padding: 50px 79px 0;
    gap: 54px;
    flex-grow: 1;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media ${devices.desktop} {
    flex-direction: row;
    height: 100%;
  }
`;
