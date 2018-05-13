import { SET_TOKEN } from '../actions/spotify';

const initialState = {
  auth: {},
};

function pokemon(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      return Object.assign({}, state, {
        auth: action.payload,
      });
    default:
      return state;
  }
}

export default pokemon;
