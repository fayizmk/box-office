import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Star from './pages/Star';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/s">
          <Star />
        </Route>
        <Route>error 404</Route>
      </Switch>
    </div>
  );
}

export default App;
