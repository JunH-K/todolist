import { all, fork, put, takeLatest, delay } from 'redux-saga/effects';
import { INCREMENT, INCREMENT_REQUEST } from 'reducers/counter';

function incrementAPI() {
  // return 데이터통신
}

function* increment(action) {
  try {
    // const result = yield call( incrementAPI, action.data );
    yield delay(1000);
    yield put({
      type: INCREMENT,
      data: action.data,
    });
  } catch (e) {
    console.error(e);
    // yield put({
    //   type: INCREMENT_ERROR,
    //   error: e,
    // });
  }
}

function* watchIncrement() {
  yield takeLatest(INCREMENT_REQUEST, increment);
}

export default function* postSaga() {
  yield all([fork(watchIncrement)]);
}
