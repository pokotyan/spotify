import { combineReducers } from 'redux';
import about from './about';
import pokemon from './pokemon';

const reducer = combineReducers({
  about,
  pokemon,
});

export default reducer;
