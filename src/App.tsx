import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import './App.scss';

const routes = (
  <Switch>
    <Route path="/" exact>
      Index Page
    </Route>
    <Route path="/page1">
      Page 1
    </Route>
    <Redirect to="/" />
  </Switch>
);

const App = () => (
  <Router>
    <main className="app-wrapper">{routes}</main>
  </Router>
);

export default App;
