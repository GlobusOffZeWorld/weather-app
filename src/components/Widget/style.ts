import styled from 'styled-components';

import { devices } from '../../constants';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(8px);
  background: rgba(217, 217, 217, 0.2);
  height: 100%;
  width: 100%;
  gap: 10px;
  max-width: 507px;
  padding: 13px 12px;
  flex-grow: 1;
  @media ${devices.desktop} {
    max-width: 1147px;
    max-height: 674px;
    min-height: 674px;
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
