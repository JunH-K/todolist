import { handleActions } from 'redux-actions';

export const TODO_LIST_REQUEST = 'todos/TODO_LIST_REQUEST';
export const TODO_LIST_SUCCESS = 'todos/TODO_LIST_SUCCESS';
export const TODO_LIST_ERROR = 'todos/TODO_LIST_ERROR';

export const ADD_TODO_REQUEST = 'todos/ADD_TODO_REQUEST';
export const ADD_TODO_ERROR = 'todos/ADD_TODO_ERROR';

const defaultState = {
  todoList: [],
  isLoading: false,
  pageInfo: {},
};

const todos = handleActions(
  {
    [TODO_LIST_REQUEST]: state => {
      return {
        ...state,
        isLoading: true,
      };
    },

    [TODO_LIST_SUCCESS]: (state, action) => {
      return {
        ...state,
        todoList: action.data.row,
        pageInfo: action.data.pageInfo,
        isLoading: false,
      };
    },
  },
  defaultState
);

export default todos;
