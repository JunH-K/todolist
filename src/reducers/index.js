import { combineReducers } from 'redux';
import todos from './todos';
import dataManager from './dataManager';

const rootReducer = combineReducers({
  todos,
  dataManager,
});

export default rootReducer;
