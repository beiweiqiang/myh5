import { SIGNUP_ERROR_MESSAGE, SIGNUP_FORM_INPUT, SIGNUP_SUCCESS, VALIDATE_SIGNUP_FORM } from '../actions';

export function signupErrMessage(state = '', action) {
  if (action.type === SIGNUP_ERROR_MESSAGE) {
    return action.message;
  }
  return state;
}

export function signUpFormInput(state = {
  name: '',
  email: '',
  password: '',
  confirm: '',
}, action) {
  if (action.type === SIGNUP_FORM_INPUT) {
    return Object.assign({}, state, action.input);
  }
  return state;
}

export function signupSuccess(state = false, action) {
  if (action.type === SIGNUP_SUCCESS) {
    return true;
  }
  return state;
}


export function validateSignUp(state = {
  name: '',
  email: '',
  password: '',
  confirm: '',
  valid: false,
}, action) {
  if (action.type === VALIDATE_SIGNUP_FORM) {
    return Object.assign({}, state, {
      name: action.validateErr.name,
      email: action.validateErr.email,
      password: action.validateErr.password,
      confirm: action.validateErr.confirm,
    });
  }
  return state;
}
