import {
  fork,
  all,
} from 'redux-saga/effects';
import increment from './increment';
import pokemon from './pokemon';

export default function* rootSaga() {
  yield all([
    fork(increment),
    fork(pokemon),
  ]);
}
