import rootReducer from '../reducers';
import logger from 'redux-logger'
import { applyMiddleware, createStore } from 'redux';
// import createSagaMiddleware from "redux-saga";
// import rootSaga from "../saga";

// const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(
    // sagaMiddleware,
    logger
  )
);

// sagaMiddleware.run(rootSaga);

export default store;
