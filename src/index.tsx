import './index.css';

import { Loading } from '@components/Common';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { Global } from '@components/Theme/global';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { Error } from '@/pages/Error';
import { persistor, store } from '@/redux/store';

import App from './App';

const router = createBrowserRouter([
  {
    path: '/weather-app/',
    element: <App />,
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<p>Something went wrong...</p>}>
      <Global />
      <Provider store={store}>
        <PersistGate
          loading={<Loading />}
          persistor={persistor}
        >
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
