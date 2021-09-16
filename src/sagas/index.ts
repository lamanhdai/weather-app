import { all, fork } from 'redux-saga/effects';
import searchPlace from './weather.sagas';

export default function* root() {
  yield all([fork(searchPlace)]);
};