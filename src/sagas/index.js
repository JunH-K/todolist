import { all, call } from 'redux-saga/effects';
import todos from './todos';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';
export default function* rootSaga() {
  yield all([call(todos)]);
}
