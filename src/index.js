import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from "react-redux";
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    black: '#1D1E21',
    white: '#FFFFFF',
    bluelight:'#59B17A10%',
    whiteblue: '#F7F8FA',
    green: '#59B17A',
  },

  spacing: value => `${value * 5}px`,
}

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
  <Provider store={store}>
    <PersistGate  persistor={persistor}>
      <BrowserRouter  basename="/E-Pharmacy">
          <ThemeProvider theme = {theme}>
             <App />
          </ThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
  </React.StrictMode>
);

