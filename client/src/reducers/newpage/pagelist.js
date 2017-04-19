import { TOGGLE_PAGE, DELETE_PAGE, ADD_NEW_PAGE } from '../../actions';

import { CHANGE_FONT_SIZE, CHANGE_FONT_COLOR, FONT_BOLD, CHANG_TEXT_CONTENT } from '../../actions';

import { ADD_TEXT, ADD_PIC } from '../../actions';

export function currentPage(state = 0, action) {
  if (action.type === TOGGLE_PAGE) {
    return action.page;
  }
  return state;
}

function page(state = {
  text: [],
  pic: [],
}, action) {
  if (action.type === ADD_TEXT) {
    return Object.assign({}, state, {
      text: [
        ...state.text,
        {
          content: '示例文本示例文本示例文本',
          size: 16,
          color: '#000',
          bold: false,
          x: 0,
          y: 0,
        },
      ],
    });
  }
  if (action.type === ADD_PIC) {
    return Object.assign({}, state, {
      pic: [
        ...state.pic,
        {
          url: action.picUrl,
          width: action.width,
          height: action.height,
          x: 0,
          y: 0,
        },
      ],
    });
  }
  if (action.type === CHANGE_FONT_SIZE) {
    return Object.assign({}, state, {
      text: [
        ...state.text.slice(0, action.item),
        Object.assign({}, state.text[action.item], {
          size: action.size,
        }),
        ...state.text.slice(action.item + 1),
      ],
    });
  }
  if (action.type === CHANGE_FONT_COLOR) {
    return Object.assign({}, state, {
      text: [
        ...state.text.slice(0, action.item),
        Object.assign({}, state.text[action.item], {
          color: action.color,
        }),
        ...state.text.slice(action.item + 1),
      ],
    });
  }
  if (action.type === FONT_BOLD) {
    return Object.assign({}, state, {
      text: [
        ...state.text.slice(0, action.item),
        Object.assign({}, state.text[action.item], {
          bold: action.bold,
        }),
        ...state.text.slice(action.item + 1),
      ],
    });
  }
  if (action.type === CHANG_TEXT_CONTENT) {
    return Object.assign({}, state, {
      text: [
        ...state.text.slice(0, action.item),
        Object.assign({}, state.text[action.item], {
          content: action.content,
        }),
        ...state.text.slice(action.item + 1),
      ],
    });
  }
  return state;
}


export function pages(state = [
  {
    text: [],
    pic: [],
  },
], action) {
  if (action.type === DELETE_PAGE) {
    return [
      ...state.slice(0, action.page),
      ...state.slice(action.page + 1),
    ];
  }
  if (action.type === ADD_NEW_PAGE) {
    return [
      ...state,
      {
        text: [],
        pic: [],
      },
    ];
  }
  if (action.type === ADD_TEXT
    || action.type === ADD_PIC
    || action.type === CHANGE_FONT_SIZE
    || action.type === CHANGE_FONT_COLOR
    || action.type === FONT_BOLD
    || action.type === CHANG_TEXT_CONTENT) {
    return [
      ...state.slice(0, action.page),
      page(state[action.page], action),
      ...state.slice(action.page + 1),
    ];
  }
  return state;
}
