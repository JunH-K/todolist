import { all, fork, put, takeLatest, delay, call } from 'redux-saga/effects';
import querystring from 'querystring';
import axios from 'axios';
import {
  TODO_LIST_REQUEST,
  TODO_LIST_SUCCESS,
  TODO_LIST_ERROR,
  ADD_TODO_REQUEST,
  ADD_TODO_ERROR,
  EDIT_TODO_REQUEST,
  EDIT_TODO_ERROR,
  EDIT_TODO_SUCCESS,
  DELETE_TODO_REQUEST,
} from '../reducers/todos';

function todoListAPI(data) {
  const query = querystring.stringify(data);

  return axios.get(`/todos?${query}`);
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
      // data: result.data,
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
  yield takeLatest(ADD_TODO_REQUEST, addTodo);
}

function editTodoAPI(data) {
  const { id, ...rest } = data;
  return axios.patch(`/todos/${id}`, rest);
}

function* editTodo(action) {
  try {
    const result = yield call(editTodoAPI, action.data);
    const [editedTodo] = result.data;
    yield put({
      type: EDIT_TODO_SUCCESS,
      data: editedTodo,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: EDIT_TODO_ERROR,
      error: e,
    });
  }
}

function* watchEditTodo() {
  yield takeLatest(EDIT_TODO_REQUEST, editTodo);
}

function deleteTodoAPI(data) {
  const { id } = data;
  return axios.delete(`/todos/${id}`);
}

function* deleteTodo(action) {
  try {
    const result = yield call(deleteTodoAPI, action.data);
  } catch (e) {
    console.error(e);
    yield put({
      type: EDIT_TODO_ERROR,
      error: e,
    });
  }
}

function* watchDeleteTodo() {
  yield takeLatest(DELETE_TODO_REQUEST, deleteTodo);
}

export default function* todoSaga() {
  yield all([
    fork(watchTodoList),
    fork(watchAddTodo),
    fork(watchEditTodo),
    fork(watchDeleteTodo),
  ]);
}
