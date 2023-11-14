import { Calendar, ForecastContainer, ForecastTypeSelector, Header } from '@components';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { theme } from '@components/Theme';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { RootState } from '@/redux/store';

import { ThemeTypeSelector } from '../ThemeTypeSelector';
import { Flex, InfoSection, Wrapper } from './style';

export const Widget: FC = () => {
  const currentTheme = useSelector((state: RootState) => state.theme);

  return (
    <ThemeProvider theme={theme[currentTheme.type]}>
      <ThemeTypeSelector />

      <Wrapper>
        <InfoSection>
          <Header />
          <Flex>
            <ErrorBoundary fallback={<p>Something wrong with forecast</p>}>
              <Calendar />
            </ErrorBoundary>
            <ForecastTypeSelector />
          </Flex>
        </InfoSection>
        <ErrorBoundary fallback={<p>Something wrong with forecast</p>}>
          <ForecastContainer />
        </ErrorBoundary>
      </Wrapper>
    </ThemeProvider>
  );
};
