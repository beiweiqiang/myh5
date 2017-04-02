import { combineReducers } from 'redux';

import validateSignUp from './validateSignUp';


const user = (state = {}, action) => {
  console.log('reducer:user state: ', state, 'action: ', action);

  return {
    name: 'heanqi',
    email: 'woaini@aini.com',
    avatarUrl: './img/default.jpg',
  };

  // switch (action.type) {
  //   case value:
  //     break;

  //   default:
  //     break;
  // }
};

const loginState = (state = false, action) => {
  console.log('reducer:loginState state: ', state, 'action: ', action);

  switch (action.type) {
    case 'LOGINED':
      return false;
    case 'LOGINING':
      return true;
    default:
      return state;
  }
};



// const validateSignUp = (state = {
//   name: '',
//   email: '',
//   password: '',
//   confirm: '',
// }, action) => {
//   switch (action.type) {
//     case VALIDATE_SIGNUP_FORM:

//       return 
//     default:
//       return state;
//   }
// };




export default combineReducers({
  // user,
  validateSignUp,
});
