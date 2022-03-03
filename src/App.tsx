import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CharacterView from './components/CharacterView/CharacterView';
import Home from './components/Home/Home';
import Survey from './components/Survey/Survey';

import './App.css';

// import { ThemeProvider, themes } from '@stichting-allianceblock-foundation/components';
// import Flex from './components/Flex/Flex';
// import Grid from './components/Grid/Grid';

function App() {
  return (
    // <ThemeProvider theme={'dark',}>
    <Router>
      <div className="App">
        <Switch>
          <Route path="/character-profile/:name" component={CharacterView} />
          <Route path="/survey" component={Survey} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
    // </ThemeProvider>
  );
}

export default App;
