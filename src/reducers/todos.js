import { handleActions } from 'redux-actions';

export const TODO_LIST_REQUEST = 'todo/TODO_LIST_REQUEST';
export const TODO_LIST_SUCCESS = 'todo/TODO_LIST_SUCCESS';
export const TODO_LIST_ERROR = 'todo/TODO_LIST';

const defaultState = { todoList: [] };

const todos = handleActions(
  {
    [TODO_LIST_SUCCESS]: (state, action) => {
      return {
        todoList: action.data,
      };
    },
  },
  defaultState
);

export default todos;
