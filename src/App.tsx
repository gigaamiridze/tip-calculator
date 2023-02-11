import React from 'react';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { defaultTheme } from './theme/defaultTheme';
import splitter from './assets/svg/logo.svg';
// Importing Components
import Global from './assets/styles/Global';
import Container from './components/Container';
import Logo from './components/Logo';
import TipCalculator from './components/TipCalculator/TipCalculator';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HelmetProvider>
        <Global />
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
        </Helmet>
        <Container>
          <Logo src={splitter} alt="Splitter" />
          <TipCalculator />
        </Container>
      </HelmetProvider>
    </ThemeProvider>
  )
}

export default App;
