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

    const accessToken = action.payload;

    const result = yield rp({
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      uri: 'https://api.spotify.com/v1/me/player/devices',
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
