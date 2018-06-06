import logger from 'redux-logger';
import {
  applyMiddleware,
  createStore,
} from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();

export default function reduxCreateStore(history) {
  return (() => {
    const store = createStore(
      rootReducer,
      applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history),
        logger,
      ),
    );

    // historyをsagaで使えるようにする。https://qiita.com/jun68ykt/items/541cc8247900e126ac5b
    sagaMiddleware.run(rootSaga, { history });

    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('../reducers', () => {
        const nextRootReducer = rootReducer;

        store.replaceReducer(nextRootReducer);
      });
    }

    return store;
  })();
}
