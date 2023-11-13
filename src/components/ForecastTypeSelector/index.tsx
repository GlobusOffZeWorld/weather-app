import { FC } from "react"
import { Button } from "../Common"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../redux/store";
import { triggerForecastType } from "../../redux/slices/forecastTypeSlice"
import { Wrapper } from "./style"

export const ForecastTypeSelector: FC = () => {
  const forecastType = useSelector((state: RootState) => state.forecastType.type)
  const dispatch = useDispatch()

  return (
    <Wrapper>
      <Button datatype={'forecast-type-selector'} onClick={() => dispatch(triggerForecastType())}>{forecastType}</Button>
    </Wrapper>
  )
}
