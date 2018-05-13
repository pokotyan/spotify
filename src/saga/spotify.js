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
  FETCH_TOKEN,
  setToken,
} from '../actions/spotify';

function* authAsync() {
  for (;;) {
    yield take(AUTH);

    yield rp({
      method: 'GET',
      uri: 'http://localhost:9000/api/spotify/auth',
      json: true,
    });

    yield put(auth());

    continue;
  }
}

function* fetchTokenAsync() {
  for (;;) {
    const action = yield take(FETCH_TOKEN);

    const code = action.payload;

    const result = yield rp({
      method: 'GET',
      uri: `http://localhost:9000/api/spotify/token/${code}`,
      json: true,
    });

    yield put(setToken(result));

    continue;
  }
}

export default function* rootSaga() {
  yield all([
    fork(authAsync),
    fork(fetchTokenAsync),
  ]);
}
