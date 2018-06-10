import rp from 'request-promise';
import {
  put,
  take,
  all,
  fork,
  select,
} from 'redux-saga/effects';
import * as pokemonActions from '../actions/pokemon';


function* get() {
  for (;;) {
    yield take(pokemonActions.GET);

    const result = yield rp({
      method: 'GET',
      uri: 'http://localhost:9000/api/pokemon',
      json: true,
    });

    yield put(pokemonActions.get(result));
  }
}

function* quizCorrect() {
  for (;;) {
    yield take(pokemonActions.CORRECT);
    const state = yield select();
    console.log(state);
    yield put(pokemonActions.correct({ correct: true }));
  }
}

function* quizUnCorrect() {
  for (;;) {
    yield take(pokemonActions.UN_CORRECT);
    const state = yield select();
    console.log(state);

    yield put(pokemonActions.unCorrect({ correct: false }));
  }
}

export default function* rootSaga() {
  yield all([
    fork(get),
    fork(quizCorrect),
    fork(quizUnCorrect),
  ]);
}
