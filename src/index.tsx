import { configureStore } from '@reduxjs/toolkit';
import LoadingScreen from 'pages/LoadingScreen';
import React, { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { rootReducer } from 'redux/reducers/rootReducer';
import './i18n';

const App = React.lazy(() => import('./App'));

const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback={<LoadingScreen />}>
        <App />
        <ToastContainer />
      </Suspense>
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
