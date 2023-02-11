import React from 'react';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { defaultTheme } from './theme/defaultTheme';
import splitter from './assets/svg/logo.svg';
import Global from './assets/styles/Global';
import Logo from './components/Logo';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HelmetProvider>
        <Global />
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
        </Helmet>
        <Logo src={splitter} alt="Splitter" />
      </HelmetProvider>
    </ThemeProvider>
  )
}

export default App;
