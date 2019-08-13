import React from 'react';
import './App.css';
import Login from '../Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Company from '../Company/Company';
import Profile from '../Profile/Profile';

function App() {
  return (
    <div className="App">
    <Router>
          <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/company-profile' component={Company} />
              <Route path='/profile' component={Profile} />
          </Switch>
      </Router>
      </div>
  );
}

export default App;
