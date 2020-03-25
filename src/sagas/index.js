import { all, call } from 'redux-saga/effects';
import counter from './counter';

export default function* rootSaga() {
  yield all([call(counter)]);
}
