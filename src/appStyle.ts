import styled from 'styled-components';

import background from './assets/background.png';

export const Wrapper = styled.div.attrs<{ $background?: string }>(props => ({
  $background: props.$background || background
}))`
  display: flex;
  height: 100%;
  width: 100%;
  background: url(${props => props.$background});
  background-size: cover;
  background-position: center;
  justify-content: center;
  align-items: center;
  padding: 29px 20px;
  transition: 0.4s;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
`;
