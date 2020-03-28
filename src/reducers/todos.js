import { handleActions } from 'redux-actions';

export const TODO_LIST_REQUEST = 'todos/TODO_LIST_REQUEST';
export const TODO_LIST_SUCCESS = 'todos/TODO_LIST_SUCCESS';
export const TODO_LIST_ERROR = 'todos/TODO_LIST_ERROR';

export const ADD_TODO = 'todos/ADD_TODO';
export const ADD_TODO_ERROR = 'todos/ADD_TODO_ERROR';

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
