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
  FETCH_DEVICE,
  fetchDevice,
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

function* fetchDeviceAsync() {
  for (;;) {
    const action = yield take(FETCH_DEVICE);
    const {
      accessToken,
      refreshToken,
    } = action.payload;

    const result = yield rp({
      method: 'POST',
      uri: 'http://localhost:9000/api/device',
      form: {
        accessToken,
        refreshToken,
      },
      json: true,
    });

    yield put(fetchDevice(result));

    continue;
  }
}

export default function* rootSaga() {
  yield all([
    fork(authAsync),
    fork(fetchTokenAsync),
    fork(fetchDeviceAsync),
  ]);
}
