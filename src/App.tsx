import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import background from './assets/background.png';
import { Loading } from './components/Common';
import { Widget } from './components/Widget';
import { backgrounds } from './constants/backgrounds';
import { setUserLocation } from './redux/slices/userLocationSlice';
import { RootState } from './redux/store';
import { pickImage } from './utils';

const Wrapper = styled.div.attrs<{ $background?: string }>(props => ({
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

function App() {
  const { data, isLoading } = useSelector((state: RootState) => state.forecast);
  const dispatch = useDispatch();
  console.log('rendered');

  useEffect(() => {
    const getUserLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            dispatch(setUserLocation({ cityName: 'Current position', latitude, longitude }));
          },
          error => console.error('Error getting user location', error)
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };
    getUserLocation();
  }, []);
  return (
    <Wrapper $background={backgrounds[pickImage(data[0].icon)] || backgrounds['defaultIcon']}>
      {isLoading ? <Loading /> : <Widget />}
    </Wrapper>
  );
}

export default App;
