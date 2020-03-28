import { all, call } from 'redux-saga/effects';
import todos from './todos';
import axios from 'axios';

axios.defaults.baseURL = 'https://todo-server-nine.now.sh/';
export default function* rootSaga() {
  yield all([call(todos)]);
}
