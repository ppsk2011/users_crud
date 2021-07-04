import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers/index';
import createSagaMiddleware from '@redux-saga/core';

import rootSaga from './sagas';
const sagaMiddleware = createSagaMiddleware();
const store = compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__())(
        createStore)(rootReducer);

sagaMiddleware.run(rootSaga)
export default store;