import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';

// import App from './containers/App.jsx';
import createHistory from 'history/createBrowserHistory';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import DashboardPage from './containers/DashboardPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import Auth from './modules/Auth';

import * as reducers from './reducers';
import BasicExample from './example.jsx';

// import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  applyMiddleware(middleware)
);

ReactDOM.render(
  (<MuiThemeProvider muiTheme={getMuiTheme()}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
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
        </div>
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>),
  document.getElementById('root')
);
