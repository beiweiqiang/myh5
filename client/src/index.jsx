import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import ReduxThunk from 'redux-thunk';

import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

// import components
import DashboardPage from './containers/DashboardPage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import Logout from './containers/Logout.jsx';

import * as reducers from './reducers';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  applyMiddleware(middleware, ReduxThunk)
);

store.subscribe(() => {
  // console.log('store has been updated. Latest store state:', store.getState());
  // 在这里更新你的视图
});

ReactDOM.render(
  (<MuiThemeProvider muiTheme={getMuiTheme()}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={DashboardPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/logout" component={Logout} />
        </div>
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>),
  document.getElementById('root')
);
