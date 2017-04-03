import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import DashboardPage from './DashboardPage.jsx';
import LoginPage from './LoginPage.jsx';
import SignUpPage from './SignUpPage.jsx';
import Auth from '../modules/Auth';

// import TopBar from './components/TopBar.jsx';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     colorTheme: '',
  //     user: {
  //       email: '',
  //       name: '',
  //       avatarUrl: '',
  //     },
  //   };
  // }

  render() {
    const { dispatch, user } = this.props;
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
  }
}

// App.propTypes = {
//   // user: PropTypes.shape({
//   //   name: PropTypes.string.isRequired,
//   //   avatarUrl: PropTypes.string.isRequired,
//   //   email: PropTypes.string.isRequired,
//   // }).isRequired,
// };

// // Which props do we want to inject, given the global state?
// function mapStateToProps(state) {
//   // 下面两个key都是传给子组件的props
//   return {
//     user: state.user,
//     // visibleTodos: selectTodos(state.todos, state.visibilityFilter),
//     // visibilityFilter: state.visibilityFilter
//   };
// }

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
// export default connect(mapStateToProps)(App);
export default App;
