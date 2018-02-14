import { combineReducers } from 'redux';
import { INCREMENT } from '../actions/about';

function about(state = {value: 0}, action) {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        value: action.payload,
      });
    default:
      return state;
  }
}

const reducer = combineReducers({
  about,
});

export default reducer;
