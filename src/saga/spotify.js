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
  SEARCH,
  search,
  PLAY,
  play,
  FETCH_PLAYLIST,
  fetchPlayList,
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

    const {
      accessToken,
      refreshToken,
    } = yield rp({
      method: 'GET',
      uri: `http://localhost:9000/api/spotify/token/${code}`,
      json: true,
    });

    yield put(setToken({
      accessToken,
      refreshToken,
    }));

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

    const {
      response,
      latestToken,
    } = yield rp({
      method: 'POST',
      uri: 'http://localhost:9000/api/device',
      form: {
        accessToken,
        refreshToken,
      },
      json: true,
    });

    // store内のトークンの最新化
    yield put(setToken({
      accessToken: latestToken.accessToken,
      refreshToken: latestToken.refreshToken,
    }));

    yield put(fetchDevice(response));

    continue;
  }
}

function* searchAsync() {
  for (;;) {
    const action = yield take(SEARCH);
    const {
      accessToken,
      refreshToken,
      query,
      type,
    } = action.payload;

    const {
      response,
      latestToken,
    } = yield rp({
      method: 'POST',
      uri: 'http://localhost:9000/api/search',
      form: {
        accessToken,
        refreshToken,
        query,
        type,
      },
      json: true,
    });

    // store内のトークンの最新化
    yield put(setToken({
      accessToken: latestToken.accessToken,
      refreshToken: latestToken.refreshToken,
    }));

    yield put(search(response));

    continue;
  }
}

function* playAsync() {
  for (;;) {
    const action = yield take(PLAY);
    const {
      accessToken,
      refreshToken,
      contextUri,
    } = action.payload;

    const {
      response,
      latestToken,
    } = yield rp({
      method: 'POST',
      uri: 'http://localhost:9000/api/play',
      form: {
        accessToken,
        refreshToken,
        contextUri,
      },
      json: true,
    });

    // store内のトークンの最新化
    yield put(setToken({
      accessToken: latestToken.accessToken,
      refreshToken: latestToken.refreshToken,
    }));

    yield put(play(response));

    continue;
  }
}

function* fetchPlayListAsync() {
  for (;;) {
    const action = yield take(FETCH_PLAYLIST);
    const {
      accessToken,
      refreshToken,
      contextUri,
    } = action.payload;

    console.log(action.payload);
    const {
      response,
      latestToken,
    } = yield rp({
      method: 'POST',
      uri: 'http://localhost:9000/api/playlist',
      form: {
        accessToken,
        refreshToken,
        contextUri,
      },
      json: true,
    });

    // store内のトークンの最新化
    yield put(setToken({
      accessToken: latestToken.accessToken,
      refreshToken: latestToken.refreshToken,
    }));

    console.log(response);

    yield put(fetchPlayList(response));

    continue;
  }
}

export default function* rootSaga() {
  yield all([
    fork(authAsync),
    fork(fetchTokenAsync),
    fork(fetchDeviceAsync),
    fork(searchAsync),
    fork(playAsync),
    fork(fetchPlayListAsync),
  ]);
}
