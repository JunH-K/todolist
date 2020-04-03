import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  BACKUP_ERROR,
  BACKUP_REQUEST,
  BACKUP_SUCCESS,
} from '../reducers/dataManager';

function backupApi() {
  return axios.get(`/todos`);
}

function* backup() {
  try {
    const result = yield call(backupApi);

    yield put({
      type: BACKUP_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: BACKUP_ERROR,
      error: e,
    });
  }
}

function* watchBackup() {
  yield takeLatest(BACKUP_REQUEST, backup);
}

export default function* dataManagerSaga() {
  yield all([fork(watchBackup)]);
}
