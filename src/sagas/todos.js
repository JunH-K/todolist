import { all, fork, put, takeLatest, delay, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  TODO_LIST_REQUEST,
  TODO_LIST_SUCCESS,
  TODO_LIST_ERROR,
  ADD_TODO,
  ADD_TODO_ERROR,
} from '../reducers/todos';

function todoListAPI(data) {
  const { page = 1, limit = 5, countPage = 3 } = data;

  return axios.get(`/todos?page=${page}&limit=${limit}&countPage=${countPage}`);
}

function* todoList(action) {
  try {
    const result = yield call(todoListAPI, action.data);

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

function AddTodoAPI(todo) {
  return axios.post(`/todos`, todo);
}

function* addTodo(action) {
  try {
    const result = yield call(AddTodoAPI, action.data);

    yield put({
      type: TODO_LIST_REQUEST,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: ADD_TODO_ERROR,
      error: e,
    });
  }
}

function* watchAddTodo() {
  yield takeLatest(ADD_TODO, addTodo);
}

export default function* todoSaga() {
  yield all([fork(watchTodoList), fork(watchAddTodo)]);
}
