import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';


class LoginForm extends Component {
  render() {
    const { successMessage, validateResult, user } = this.props;

    const { loginFormInput, submitLogin } = this.props;

    return (
      <Card className="container">
        <form action="/" onSubmit={(event) => { event.preventDefault(); submitLogin(user); }}>
          <h2 className="card-heading">Login</h2>

          {successMessage && <p className="success-message">{successMessage}</p>}
          {validateResult.errorMessage && <p className="error-message">{validateResult.errorMessage}</p>}

          <div className="field-line">
            <TextField
              floatingLabelText="Email"
              name="email"
              errorText={validateResult.email}
              onChange={event => loginFormInput({ email: `${event.target.value}` })}
              value={user.email}
              autoFocus
            />
          </div>

          <div className="field-line">
            <TextField
              floatingLabelText="Password"
              type="password"
              name="password"
              onChange={event => loginFormInput({ password: `${event.target.value}` })}
              errorText={validateResult.password}
              value={user.password}
            />
          </div>

          <div className="button-line">
            <RaisedButton type="submit" label="Log in" primary />
          </div>

          <CardText>Don't have an account? <Link to={'/signup'}><FlatButton label="Create one" primary={true} /></Link>.</CardText>
        </form>
      </Card>
    );
  }
}

LoginForm.propTypes = {
  submitLogin: PropTypes.func.isRequired,
  loginFormInput: PropTypes.func.isRequired,
  validateResult: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
};

export default LoginForm;
