import { all, fork, put, takeLatest, delay, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  TODO_LIST_REQUEST,
  TODO_LIST_SUCCESS,
  TODO_LIST_ERROR, ADD_TODO,
} from '../reducers/todos';

function todoListAPI(page) {
  return axios.get(`/todos?_page=${page}`);
}

function* todoList(action) {
  try {
    const result = yield call(todoListAPI, action.data.page);

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
  console.log( todo );
  return axios.post(`/todos`,todo);
}

function* addTodo(action) {
  try {
    const result = yield call(AddTodoAPI, action.data);

    // yield put({
    //   type: TODO_LIST_SUCCESS,
    //   data: result.data,
    // });
  } catch (e) {
    console.error(e);
    yield put({
      type: TODO_LIST_ERROR,
      error: e,
    });
  }
}

function* watchAddTodo() {
  yield takeLatest(ADD_TODO, addTodo);
}

export default function* todoSaga() {
  yield all([fork(watchTodoList),fork(watchAddTodo)]);
}
