import { Widget } from '@components';
import { Loading } from '@components/Common';
import { useSelector } from 'react-redux';

import { Wrapper } from './appStyle';
import { images } from './constants/images';
import { RootState } from './redux/store';
import { pickImage } from './utils';

function App() {
  const { dailyData, isLoading } = useSelector((state: RootState) => state.forecast);

  return (
    <Wrapper
      $background={
        images[pickImage(dailyData[0].icon)]?.background || images['defaultImage'].background
      }
    >
      <Widget />
      {isLoading && <Loading />}
    </Wrapper>
  );
}

export default App;
