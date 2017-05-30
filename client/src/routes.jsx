/* eslint linebreak-style: ["error", "windows"] */

import React from 'react';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

// Logger with default options
import logger from 'redux-logger';

import createHistory from 'history/createBrowserHistory';
import {
  Route,
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
import NewPage from './containers/NewPage.jsx';
import MyPage from './containers/MyPage.jsx';

import * as reducers from './reducers';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

const history = createHistory();
// const middleware = routerMiddleware(history);

const middlewares = [
  routerMiddleware(history),
  ReduxThunk,
  // logger,
];

// console.log(process.env.NODE_ENV);
// if (process.env.NODE_ENV === 'development') {
//   const { logger } = require('redux-logger');
//   middlewares.push(logger);
// }

const store = compose(applyMiddleware(...middlewares))(createStore)(combineReducers({
  ...reducers,
  router: routerReducer,
}));

// const store = createStore(
//   combineReducers({
//     ...reducers,
//     router: routerReducer,
//   }),
//   applyMiddleware(...middlewares)
// );

store.subscribe(() => {
  // 在这里更新你的视图
  // console.log(store.getState());
  // console.log(store.getState().logger);
  // console.log(store.getState().currentPage);
});

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <div>
              {/*DashboardPage*/}
              <Route exact path="/" component={NewPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignUpPage} />
              <Route path="/logout" component={Logout} />
              <Route path="/newpage" component={NewPage} />
              <Route path="/mypage" component={MyPage} />
            </div>
          </ConnectedRouter>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
