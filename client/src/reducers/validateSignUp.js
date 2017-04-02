import validator from 'validator';

import { VALIDATE_SIGNUP_FORM } from '../actions';

function validateSignupForm(payload) {
  const errors = {
    email: '',
    name: '',
    password: '',
    confirm: '',
  };
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
  return { errors, isFormValid };
}

const validateSignUp = (state = {
  name: '',
  email: '',
  password: '',
  confirm: '',
  valid: false,
}, action) => {
  switch (action.type) {
    case VALIDATE_SIGNUP_FORM:
      // const content = action.signUpContent;
      const validateRes = validateSignupForm(action.signUpContent);
      const validateErr = validateRes.errors;
      return Object.assign({}, state, {
        name: validateErr.name,
        email: validateErr.email,
        password: validateErr.password,
        confirm: validateErr.confirm,
        valid: validateRes.isFormValid,
      });
    default:
      return state;
  }
};

export default validateSignUp;
