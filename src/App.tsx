import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './App.scss';

const routes = (
  <Routes>
    <Route path="/" element={<div>Index Page</div>} />
    <Route path="/page1" element={<div>Page 1</div>} />
    <Route
      path="*"
      element={<Navigate to="/" />}
    />
  </Routes>
);

const App = () => (
  <Router>
    <main className="app-wrapper">{routes}</main>
  </Router>
);

export default App;
