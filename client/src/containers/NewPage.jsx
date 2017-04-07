import React, { Component, PropTypes } from 'react';

import TopBar from './TopBarContainer.jsx';
import Toolbar from '../components/Toolbar.jsx';


class NewPage extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Toolbar />
      </div>
    );
  }
}

NewPage.propTypes = {

};

export default NewPage;
