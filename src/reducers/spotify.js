import {
  SET_TOKEN,
  FETCH_DEVICE,
  SEARCH,
  PLAY,
} from '../actions/spotify';

const initialState = {
  auth: {},
  device: [],
  search: {},
  play: {},
};

function spotify(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      return Object.assign({}, state, {
        auth: action.payload,
      });
    case FETCH_DEVICE:
      return Object.assign({}, state, {
        device: action.payload,
      });
    case SEARCH:
      return Object.assign({}, state, {
        search: action.payload,
      });
    case PLAY:
      return Object.assign({}, state, {
        play: action.payload,
      });

    default:
      return state;
  }
}

export default spotify;
