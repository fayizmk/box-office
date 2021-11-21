import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';
import Show from './pages/Show';
import Star from './pages/Star';

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/s">
          <Star />
        </Route>
        <Route exact path="/show/:id">
          <Show />
        </Route>
        <Route>error 404</Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
