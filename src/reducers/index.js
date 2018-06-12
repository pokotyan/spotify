import { combineReducers } from 'redux';
import about from './about';
import spotify from './spotify';

const reducer = combineReducers({
  about,
  spotify,
});

export default reducer;
