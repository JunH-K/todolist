import { all, fork, put, takeLatest, delay, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  TODO_LIST_REQUEST,
  TODO_LIST_SUCCESS,
  TODO_LIST_ERROR,
} from '../reducers/todos';

function todoListAPI(page) {
  return axios.get(`/todos?_page=${page}`);
}

function* todoList(action) {
  try {
    const result = yield call(todoListAPI, action.data.page);
    debugger;
    yield put({
      type: TODO_LIST_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: TODO_LIST_ERROR,
      error: e,
    });
  }
}

function* watchTodoList() {
  yield takeLatest(TODO_LIST_REQUEST, todoList);
}

export default function* todoSaga() {
  yield all([fork(watchTodoList)]);
}
