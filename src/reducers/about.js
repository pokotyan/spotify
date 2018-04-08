import { INCREMENT } from '../actions/about';

const initialState = {value: 0};

function about(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        value: action.payload,
      });
    default:
      return state;
  }
}

export default about;
