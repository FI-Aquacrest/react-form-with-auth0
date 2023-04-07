import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import lightThemeOptions from './themes/lightThemeOptions';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider as ReduxProvider } from 'react-redux';
import { setupStore } from './redux/store';

import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = createTheme(lightThemeOptions);

const origin =
  window.location.hostname === 'fi-aquacrest.github.io'
    ? 'https://fi-aquacrest.github.io/react-form-with-auth0/'
    : window.location.origin;

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-0yuvhzezjxqq2qjx.us.auth0.com"
      clientId="w9g9wV7kCKhFyJcZptWGxyQHPFbKuyfs"
      authorizationParams={{
        redirect_uri: origin,
      }}
    >
      <ReduxProvider store={setupStore()}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </ReduxProvider>
    </Auth0Provider>
  </React.StrictMode>
);
