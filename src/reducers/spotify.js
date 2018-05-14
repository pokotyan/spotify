import {
  SET_TOKEN,
  FETCH_DEVICE,
} from '../actions/spotify';

const initialState = {
  auth: {},
  device: [],
};

function pokemon(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      return Object.assign({}, state, {
        auth: action.payload,
      });
    case FETCH_DEVICE:
      return Object.assign({}, state, {
        device: action.payload,
      });

    default:
      return state;
  }
}

export default pokemon;
