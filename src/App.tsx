import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { defaultTheme } from './theme/defaultTheme';
import Global from './assets/styles/Global';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Global />
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </Helmet>
    </ThemeProvider>
  )
}

export default App;
