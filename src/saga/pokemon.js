import rp from 'request-promise';
import {
  put,
  take,
  all,
  fork,
  select,
} from 'redux-saga/effects';
import {
  GET,
  get,
  CORRECT,
  correct,
  UN_CORRECT,
  unCorrect,
} from '../actions/pokemon';

function* getAsync() {
  for (;;) {
    yield take(GET);

    const result = yield rp({
      method: 'GET',
      uri: 'http://localhost:9000/api/pokemon',
      json: true,
    });

    yield put(get(result));

    continue;
  }
}

function* quizCorrectSync() {
  for (;;) {
    yield take(CORRECT);
    const state = yield select();
    console.log(state);
    yield put(correct({ correct: true }));

    continue;
  }
}

function* quizUnCorrectSync() {
  for (;;) {
    yield take(UN_CORRECT);
    const state = yield select();
    console.log(state);

    yield put(unCorrect({ correct: false }));

    continue;
  }
}

export default function* rootSaga() {
  yield all([
    fork(getAsync),
    fork(quizCorrectSync),
    fork(quizUnCorrectSync),
  ]);
}
