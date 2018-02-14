import {
  fork,
  all,
} from 'redux-saga/effects';
import increment from './increment';

export default function* rootSaga() {
  yield all([
    fork(increment),
  ]);
}
