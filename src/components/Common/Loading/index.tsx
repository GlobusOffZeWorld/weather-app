import ReactLoading from 'react-loading';
import { Wrapper } from './style';

export const Loading = () => (
  <Wrapper>
    <ReactLoading type='spinningBubbles' color='#97a3cc' height={'5%'} width={'5%'} />
  </Wrapper>
);