import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import DashboardPage from '../containers/DashboardPage.jsx';
import LoginPage from '../containers/LoginPage.jsx';
import SignUpPage from '../containers/SignUpPage.jsx';
import Auth from '../modules/Auth';
// import TopBar from './components/TopBar.jsx';

const Routes = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route
            path="/logout"
            render={() => {
              Auth.deauthenticateUser();
              return (<Redirect to="/" />);
            }}
          />
        </Switch>

      </div>
    </Router>
  );
};

export default Routes;
