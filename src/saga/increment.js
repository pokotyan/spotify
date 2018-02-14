import rp from 'request-promise';
import { 
  put,
  call,
  take,
  all,
  fork
} from 'redux-saga/effects';
import {
  INCREMENT,
  increment,
} from '../actions/about';

function* incrementAsync() {
  for (;;) {
    yield take(INCREMENT);

    const result = yield rp({
      method: 'GET',
      uri: 'http://localhost:9000/api/test',
      json: true,
    });

    yield put(increment(result.data.count));

    continue;
  }
}

export default function* rootSaga() {
  yield all([
    fork(incrementAsync),
  ]);
}
