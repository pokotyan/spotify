import rp from 'request-promise';
import {
  put,
  take,
  all,
  fork,
} from 'redux-saga/effects';
import * as spotifyActions from '../actions/spotify';


function* auth() {
  for (;;) {
    yield take(spotifyActions.AUTH);

    yield rp({
      method: 'GET',
      uri: 'http://localhost:9000/api/spotify/auth',
      json: true,
    });

    yield put(spotifyActions.auth());
  }
}

function* fetchToken() {
  for (;;) {
    const action = yield take(spotifyActions.FETCH_TOKEN);

    const code = action.payload;

    const {
      accessToken,
      refreshToken,
    } = yield rp({
      method: 'GET',
      uri: `http://localhost:9000/api/spotify/token/${code}`,
      json: true,
    });

    yield put(spotifyActions.setToken({
      accessToken,
      refreshToken,
    }));
  }
}

function* fetchDevice() {
  for (;;) {
    const action = yield take(spotifyActions.FETCH_DEVICE);
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
    yield put(spotifyActions.setToken({
      accessToken: latestToken.accessToken,
      refreshToken: latestToken.refreshToken,
    }));

    yield put(spotifyActions.fetchDevice(response));
  }
}

function* search() {
  for (;;) {
    const action = yield take(spotifyActions.SEARCH);
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
    yield put(spotifyActions.setToken({
      accessToken: latestToken.accessToken,
      refreshToken: latestToken.refreshToken,
    }));

    yield put(spotifyActions.search(response));
  }
}

function* play() {
  for (;;) {
    const action = yield take(spotifyActions.PLAY);
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
    yield put(spotifyActions.setToken({
      accessToken: latestToken.accessToken,
      refreshToken: latestToken.refreshToken,
    }));

    yield put(spotifyActions.play(response));
  }
}

function* fetchPlayList() {
  for (;;) {
    const action = yield take(spotifyActions.FETCH_PLAYLIST);
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
      uri: 'http://localhost:9000/api/playlist',
      form: {
        accessToken,
        refreshToken,
        contextUri,
      },
      json: true,
    });

    // store内のトークンの最新化
    yield put(spotifyActions.setToken({
      accessToken: latestToken.accessToken,
      refreshToken: latestToken.refreshToken,
    }));

    yield put(spotifyActions.fetchPlayList(response));
  }
}

export default function* rootSaga() {
  yield all([
    fork(auth),
    fork(fetchToken),
    fork(fetchDevice),
    fork(search),
    fork(play),
    fork(fetchPlayList),
  ]);
}
