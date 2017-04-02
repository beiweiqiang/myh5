import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

// import reducers from './reducers';
import App from './containers/App.jsx';

import BasicExample from './example.jsx';

// let store = createStore(reducers);
// let store = createStore(reducers);

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
