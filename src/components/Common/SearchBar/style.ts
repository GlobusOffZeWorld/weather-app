import styled from 'styled-components';
import { devices } from "../../../constants";

export const StyledInput = styled.input`
  border-radius: 5px;
  background: #FFF;
  width: 100%;
  height: 38px;
  border: none;
  padding: 3px 14px;
  color: #000;
  font-size: 14px;
  min-width: 120px;
  @media ${devices.tablet} {
    font-size: 22px;
    min-width: 173px;
  }
`