import { Calendar, ForecastContainer, ForecastTypeSelector, Header } from '@components';
import { FC } from 'react';

import { Flex, InfoSection, Wrapper } from './style';

export const Widget: FC = () => (
  <Wrapper>
    <InfoSection>
      <Header />
      <Flex>
        <Calendar />
        <ForecastTypeSelector />
      </Flex>
    </InfoSection>
    <ForecastContainer />
  </Wrapper>
);
