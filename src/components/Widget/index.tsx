import { FC } from "react"
import { Header } from "../Header"
import { Calendar } from "../Calendar"
import { ForecastContainer } from "../ForecastContainer"
import { ForecastTypeSelector } from "../ForecastTypeSelector"
import { Flex, InfoSection, Wrapper } from "./style"

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
)
