import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { 
    HomePage,
    CounterButtonPage,
    PeopleListPage,
    NotFoundPage,
    ProtectedPage,
    ControlledFormPage,
    UncontrolledFormPage
  } from './pages'

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/counter?startingValue=2">Counter</Link>
      <Link to="/people-list">People List</Link>
      <Link to="/protected">Protected Page</Link>
      <Link to="/controlled">Controlled Form</Link>
      <Link to="/uncontrolled">Uncontrolled Form</Link>
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
        <Route path="/protected">
          <ProtectedPage />
        </Route>
        <Route path="/controlled">
          <ControlledFormPage />
        </Route>
        <Route path="/uncontrolled">
          <UncontrolledFormPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
