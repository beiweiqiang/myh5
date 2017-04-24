import React, { Component, PropTypes } from 'react';
import Snackbar from 'material-ui/Snackbar';

class MySnackbar extends Component {
  render() {
    // state to props
    const { snackbarOpen, snackbarMes } = this.props;
    // dispatch
    const { displaySnackbar } = this.props;
    return (
      <Snackbar
        open={snackbarOpen}
        message={snackbarMes}
        autoHideDuration={4000}
        onRequestClose={() => displaySnackbar(false)}
      />
    );
  }
}

MySnackbar.propTypes = {
  snackbarOpen: PropTypes.bool.isRequired,
  snackbarMes: PropTypes.string.isRequired,
  displaySnackbar: PropTypes.func.isRequired,
};

export default MySnackbar;
