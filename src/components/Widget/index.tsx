import { FC } from 'react';

import { Calendar } from '../Calendar';
import { ForecastContainer } from '../ForecastContainer';
import { ForecastTypeSelector } from '../ForecastTypeSelector';
import { Header } from '../Header';
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
