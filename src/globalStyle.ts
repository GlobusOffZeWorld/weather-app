import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
  }
`;
