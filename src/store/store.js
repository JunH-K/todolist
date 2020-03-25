import { createStore } from 'redux';
import rootReducer from 'reducers';
import middleware from 'store/middleware';
import rootSaga from 'sagas';
import { sagaMiddleware } from './middleware';

const store = createStore(rootReducer, middleware());
sagaMiddleware.run(rootSaga);

export default store;
