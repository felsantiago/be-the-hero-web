import React, { useState } from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import { store, persistor } from './store';

import SetTheme from './components/SetTheme';
import Light from './styles/themes/Light';
import GlobalStyles from './styles/global';

function App() {
  const [theme, setTheme] = useState(Light);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SetTheme setTheme={setTheme} />
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <Routes />
            <GlobalStyles />
            <ToastContainer autoClose={3000} />
          </Router>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
