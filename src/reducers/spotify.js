import {
  SET_TOKEN,
  FETCH_DEVICE,
  SEARCH,
  SET_SEARCH_RESULT,
  PLAY,
  FETCH_PLAYLIST,
  FETCH_ARTIST,
} from '../actions/spotify';

const initialState = {
  auth: {},
  device: [],
  searchResult: {},
  play: {},
  playlist: {},
  artistInfo: {},
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
        searchResult: action.payload,
      });
    case SET_SEARCH_RESULT:
      return Object.assign({}, state, {
        searchResult: action.payload,
      });
    case PLAY:
      return Object.assign({}, state, {
        play: action.payload,
      });
    case FETCH_PLAYLIST:
      return Object.assign({}, state, {
        playlist: action.payload,
      });
    case FETCH_ARTIST:
      return Object.assign({}, state, {
        artistInfo: action.payload,
      });

    default:
      return state;
  }
}

export default spotify;
