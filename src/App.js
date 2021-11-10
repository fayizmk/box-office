import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is homepage
      </Route>
      <Route exact path="/s">
        Tstar
      </Route>
      <Route>error 404</Route>
    </Switch>
  );
}

export default App;
