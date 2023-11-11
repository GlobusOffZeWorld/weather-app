import { useSelector } from 'react-redux';
import styled from 'styled-components';

import background from './assets/background.png';
import { Widget } from './components/Widget';
import { backgrounds } from './constants/backgrounds';
import { RootState } from './redux/store';
import { pickImage } from './utils';

const Wrapper = styled.div.attrs<{ $background?: string }>(props => ({
  $background: props.$background || background
}))`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: url(${props => props.$background});
  background-size: cover;
  background-position: center;
  justify-content: center;
  align-items: center;
  padding: 29px 20px;
  transition: 0.4s;
`;

function App() {
  const { data } = useSelector((state: RootState) => state.forecast);
  return (
    <Wrapper $background={backgrounds[pickImage(data[0].icon)] || backgrounds['defaultIcon']}>
      <Widget />
    </Wrapper>
  );
}

export default App;
