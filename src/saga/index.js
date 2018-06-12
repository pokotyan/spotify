import {
  fork,
  all,
} from 'redux-saga/effects';
import increment from './increment';
import spotify from './spotify';

export default function* rootSaga() {
  yield all([
    fork(increment),
    fork(spotify),
  ]);
}
