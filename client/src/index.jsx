/* eslint linebreak-style: ["error", "windows"]*/

import React from 'react';
import ReactDOM from 'react-dom';

// AppContainer is a necessary wrapper component for HMR
import { AppContainer } from 'react-hot-loader';

import App from './routes.jsx';

const render = (Component) => {
  // 暂时修改 router component
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  // module.hot.accept('./routes.jsx', () => {
  //   const NextApp = require('./routes.jsx').default;
  //   render(NextApp);
  // });
  module.hot.accept();
}
