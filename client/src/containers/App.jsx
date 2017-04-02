import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';

import Routes from '../route/routes.jsx';
// import TopBar from '../components/TopBar.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorTheme: '',
      user: {
        email: '',
        name: '',
        avatarUrl: '',
      },
    };
  }

  render() {
    // const { dispatch, user } = this.props;
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Routes />
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  // user: PropTypes.shape({
  //   name: PropTypes.string.isRequired,
  //   avatarUrl: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  // }).isRequired,
};

// Which props do we want to inject, given the global state?
function mapStateToProps(state) {
  // 下面两个key都是传给子组件的props
  return {
    // user: state.user,
    // visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    // visibilityFilter: state.visibilityFilter
  };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
// export default connect(mapStateToProps)(App);
export default App;
