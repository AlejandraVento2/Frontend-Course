import React from 'react';

// import { ThemeProvider, themes } from '@stichting-allianceblock-foundation/components';
import Flex from './components/Flex/Flex';
import Grid from './components/Grid/Grid';

import './App.css';

function App() {
  return (
    // <ThemeProvider theme={'dark',}>
    <div className="App">
      <Flex />
      <Grid />
    </div>
    // </ThemeProvider>
  );
}

export default App;
