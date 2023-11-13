import { useSelector } from 'react-redux';

import { Wrapper } from './appStyle';
import { Loading } from './components/Common';
import { Widget } from './components/Widget';
import { images } from './constants/images';
import { useCurrentUserLocation } from './hooks/useUserLocation';
import { RootState } from './redux/store';
import { pickImage } from './utils';

function App() {
  const { dailyData, isLoading } = useSelector((state: RootState) => state.forecast);
  useCurrentUserLocation();

  return (
    <Wrapper
      $background={
        images[pickImage(dailyData[0].icon)]?.background || images['defaultImage'].background
      }
    >
      {isLoading ? <Loading /> : <Widget />}
    </Wrapper>
  );
}

export default App;
