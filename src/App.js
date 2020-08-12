import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { 
    HomePage,
    CounterButtonPage,
    PeopleListPage,
    NotFoundPage,
    ProtectedPage,
    ControlledFormPage,
    UncontrolledFormPage,
    UserProfilePage
  } from './pages'
import { NavBar } from './NavBar';
import { FormsNavBar } from './FormsNavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App-header">
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
          <Route path="/forms">
            <Router>
              <FormsNavBar />
              <Switch>
                <Route path="/forms/controlled">
                  <ControlledFormPage />
                </Route>
                <Route path="/forms/uncontrolled">
                  <UncontrolledFormPage />
                </Route>
              </Switch>
            </Router>
          </Route>
          <Route path="/user-profile">
            <UserProfilePage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
