import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { Redirect } from 'react-router-dom';
import validator from 'validator';
import Identicon from 'identicon.js';

import SignUpForm from '../components/SignUpForm.jsx';
import CircularProgressBg from '../components/CircularProgressBg.jsx';
import TopBar from '../components/TopBar.jsx';

// import { validateSignUpForm } from '../actions';

class SignUpPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props, context) {
    super(props, context);

    // set the initial component state
    this.state = {
      signupSuccess: false,
      wait: false,
      validateResult: {
        // valid: true,
        name: '',
        email: '',
        password: '',
        confirm: '',
      },
      flashMessage: '',
      user: {
        email: '',
        name: '',
        password: '',
        confirm: '',
      },
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this.validateSignupForm = this.validateSignupForm.bind(this);
    this.xhrProcessForm = this.xhrProcessForm.bind(this);
  }

  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user,
    });
  }

  validateSignupForm(payload) {
    const errors = {};
    let isFormValid = true;
    if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
      isFormValid = false;
      errors.email = 'email 不合法';
    }

    // **这里可以修改长度小于8不通过
    if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
      isFormValid = false;
      errors.password = '密码至少 8 位';
    }

    if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
      isFormValid = false;
      errors.name = 'name 不合法';
    }

    if (!payload || typeof payload.confirm !== 'string' || payload.confirm.trim().length === 0 || payload.confirm.trim() !== payload.password.trim()) {
      isFormValid = false;
      errors.confirm = '密码不相同';
    }

    if (!isFormValid) {
      errors.message = '表单填写不合法，请修改';
    }
    return {
      errors,
      isFormValid,
    };
  }


  // 先对表格内容进行验错处理
  processForm(event) {
    // **prevent default action. in this case, action is the form submission event
    event.preventDefault();
    // **create a string for an HTTP body message
    const name = encodeURIComponent(this.state.user.name);
    const email = this.state.user.email;
    const password = encodeURIComponent(this.state.user.password);
    const confirm = encodeURIComponent(this.state.user.confirm);

    // const { dispatch, validateRes } = this.props;
    // dispatch(validateSignUpForm({ name, email, password, confirm }));

    const validateRes = this.validateSignupForm({ name, email, password, confirm });

    if (validateRes.isFormValid) {
      const data = new Identicon().toString();
      const avatarUrl = `data:image/png;base64,${data}`;
      const formData = `name=${name}&email=${email}&password=${password}&confirm=${confirm}&avatarUrl=${avatarUrl}`;
      this.xhrProcessForm(formData);
    } else {
      this.setState({
        validateResult: {
          name: validateRes.errors.name,
          email: validateRes.errors.email,
          password: validateRes.errors.password,
          confirm: validateRes.errors.confirm,
        },
        flashMessage: validateRes.errors.message,
      });
    }
  }

  // ajax 处理表格
  xhrProcessForm(formData) {
    // **添加 circular progress
    this.setState({
      wait: true,
    });

    // **create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/signup');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      // **{success: boolean , [message | error]: string}
      // **
      const resMessage = $.parseJSON(JSON.stringify(xhr.response));

      if (xhr.status !== 200 || !resMessage.success) {
        return this.setState({
          wait: false,
          flashMessage: resMessage.error,
        });
      }

      // **localStorage 存储注册成功的消息，用于login页面显示 flash 消息
      localStorage.setItem('successMessage', resMessage.message);

      return this.setState({
        signupSuccess: true,
        wait: false,
      });
    });
    xhr.send(formData);
  }

  /**
   * Render the component.
   */
  render() {
    console.log(this.state);
    if (this.state.wait) {
      return (
        <div>
          <TopBar />
          <CircularProgressBg />
          <SignUpForm
            onSubmit={this.processForm}
            onChange={this.changeUser}
            flash={this.state.flashMessage}
            validateResult={this.state.validateResult}
            user={this.state.user}
          />
        </div>

      );
    }
    if (this.state.signupSuccess) return (<Redirect to="/login" />);

    return (
      <div>
        <TopBar />
        <SignUpForm
          onSubmit={this.processForm}
          onChange={this.changeUser}
          flash={this.state.flashMessage}
          validateResult={this.state.validateResult}
          user={this.state.user}
        />
      </div>
    );
  }

}

// SignUpPage.contextTypes = {
//   router: PropTypes.object.isRequired,
// };

// SignUpPage.PropTypes = {

// };

// function mapStateToProps(state) {
//   return {
//     validateRes: state.validateSignUp,
//   };
// }


// export default connect(mapStateToProps)(SignUpPage);
export default SignUpForm;
