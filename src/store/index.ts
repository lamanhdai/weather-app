import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer, {WeatherState} from './reducers';
import rootSaga from 'sagas';

const sagaMiddleware = createSagaMiddleware();

export default function store(initialState: WeatherState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware, logger));
  sagaMiddleware.run(rootSaga);
  return store;
}
