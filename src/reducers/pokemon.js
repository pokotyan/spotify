import { GET, CORRECT, UN_CORRECT } from '../actions/pokemon';

const initialState = {
  pokemon: {
    quiz: null,
    name: null,
  },
};

function pokemon(state = initialState, action) {
  switch (action.type) {
    case GET:
      return Object.assign({}, state, action.payload);
    case CORRECT:
      return Object.assign({}, state, action.payload);
    case UN_CORRECT:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

export default pokemon;
