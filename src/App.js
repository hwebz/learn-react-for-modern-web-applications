import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HomePage, CounterButtonPage, PeopleListPage } from './pages'

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/people-list">People List</Link>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/counter">
        <CounterButtonPage />
      </Route>
      <Route path="/people-list">
        <PeopleListPage />
      </Route>
    </Router>
  );
}

export default App;
