import rp from 'request-promise';
import {
  put,
  take,
  all,
  fork,
} from 'redux-saga/effects';
import * as aboutActions from '../actions/about';

function* increment() {
  for (;;) {
    yield take(aboutActions.INCREMENT);

    const result = yield rp({
      method: 'GET',
      uri: 'http://localhost:9000/api/test',
      json: true,
    });

    yield put(aboutActions.increment(result.data.count));
  }
}

export default function* rootSaga() {
  yield all([
    fork(increment),
  ]);
}
