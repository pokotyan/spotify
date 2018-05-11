import rp from 'request-promise';
import {
  put,
  take,
  all,
  fork,
} from 'redux-saga/effects';
import {
  AUTH,
  auth,
} from '../actions/spotify';

function* authAsync() {
  for (;;) {
    yield take(AUTH);

    const result = yield rp({
      method: 'GET',
      uri: 'http://localhost:9000/api/spotify/auth',
      json: true,
    });

    yield put(auth());

    continue;
  }
}

export default function* rootSaga() {
  yield all([
    fork(authAsync),
  ]);
}
