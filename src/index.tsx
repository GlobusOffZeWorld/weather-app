import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import Loading from 'react-loading';

const Global = createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
  }
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Global />
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>

  </React.StrictMode>
);