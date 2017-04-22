import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class SignUpForm extends Component {

  render() {
    // **state 变量
    const { flash, validateResult, user } = this.props;
    // console.log(user);

    // **state 方法
    const { onSubmit, signupFormInput } = this.props;
    
    return (
      <Card className="container">
        <form action="/" onSubmit={(event) => { event.preventDefault(); onSubmit(user); }}>
          <h2 className="card-heading">Sign Up</h2>

          {flash && <p className="error-message">{flash}</p>}

          <div className="field-line">
            <TextField
              floatingLabelText="Name"
              name="name"
              errorText={validateResult.name}
              onChange={event => signupFormInput({ name: `${event.target.value}` })}
              value={user.name}
            />
          </div>

          <div className="field-line">
            <TextField
              floatingLabelText="Email"
              name="email"
              errorText={validateResult.email}
              onChange={event => signupFormInput({ email: `${event.target.value}` })}
              value={user.email}
            />
          </div>

          <div className="field-line">
            <TextField
              floatingLabelText="Password"
              type="password"
              name="password"
              onChange={event => signupFormInput({ password: `${event.target.value}` })}
              errorText={validateResult.password}
              value={user.password}
            />
          </div>

          <div className="field-line">
            <TextField
              floatingLabelText="confirm"
              type="password"
              name="confirm"
              onChange={event => signupFormInput({ confirm: `${event.target.value}` })}
              errorText={validateResult.confirm}
              value={user.confirm}
            />
          </div>

          <div className="button-line">
            <RaisedButton type="submit" label="Create New Account" primary />
          </div>

          <CardText>Already have an account? <Link to={'/login'}><FlatButton label="log in" primary={true} /></Link></CardText>
        </form>
      </Card>
    );
  }
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  // onChange: PropTypes.func.isRequired,
  signupFormInput: PropTypes.func.isRequired,
  flash: PropTypes.string.isRequired,
  validateResult: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirm: PropTypes.string.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirm: PropTypes.string.isRequired,
  }).isRequired,
};

export default SignUpForm;
