import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { CircularProgress } from '@mui/material';

import App from './App';
import { store } from './core/store/setupStore';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<CircularProgress />}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>,
);
