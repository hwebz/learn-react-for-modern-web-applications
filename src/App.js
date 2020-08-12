import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { HomePage, CounterButtonPage, PeopleListPage, NotFoundPage } from './pages'

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/counter?startingValue=2">Counter</Link>
      <Link to="/people-list">People List</Link>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/counter">
          <CounterButtonPage />
        </Route>
        <Route path="/people-list">
          <PeopleListPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
