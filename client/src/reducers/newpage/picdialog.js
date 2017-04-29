
import {
  TOGGLE_PIC_DIALOG,
  ADD_PIC_TO_MY_UPLOAD,

} from '../../actions';

// boolean
export function displayPicDialog(state = false, action) {
  if (action.type === TOGGLE_PIC_DIALOG) {
    return action.display;
  }
  return state;
}

// [{url: String}]
export function myUploadPic(state = [], action) {
  if (action.type === ADD_PIC_TO_MY_UPLOAD) {
    return [
      ...state,
      ...action.picArr,
    ];
  }
  return state;
}
