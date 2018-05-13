import { combineReducers } from 'redux';
import about from './about';
import pokemon from './pokemon';
import spotify from './spotify';

const reducer = combineReducers({
  about,
  pokemon,
  spotify,
});

export default reducer;
