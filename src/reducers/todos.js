import { handleActions } from 'redux-actions';

export const TODO_LIST_REQUEST = 'todos/TODO_LIST_REQUEST';
export const TODO_LIST_SUCCESS = 'todos/TODO_LIST_SUCCESS';
export const TODO_LIST_ERROR = 'todos/TODO_LIST_ERROR';

export const ADD_TODO_REQUEST = 'todos/ADD_TODO_REQUEST';
export const ADD_TODO_SUCCESS = 'todos/ADD_TODO_SUCCESS';
export const ADD_TODO_ERROR = 'todos/ADD_TODO_ERROR';

export const EDIT_TODO_REQUEST = 'todos/EDIT_TODO_REQUEST';
export const EDIT_TODO_SUCCESS = 'todos/EDIT_TODO_SUCCESS';
export const EDIT_TODO_ERROR = 'todos/EDIT_TODO_ERROR';

export const DELETE_TODO_REQUEST = 'todos/DELETE_TODO_REQUEST';
export const DELETE_TODO_SUCCESS = 'todos/DELETE_TODO_SUCCESS';
export const DELETE_TODO_ERROR = 'todos/DELETE_TODO_ERROR';

export const STATUS_INIT = 'todos/STATUS_INIT';

const defaultState = {
  todoList: [],
  isLoading: false,
  pageInfo: {},
  queryString: {},
  addTodoStatus: '',
  addTodoError: [],
  editTodoStatus: '',
  editTodoError: [],
  deleteStatus: '',
};

const todos = handleActions(
  {
    [TODO_LIST_REQUEST]: (state, action) => {
      return {
        ...state,
        queryString: { ...action.data },
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
    [TODO_LIST_ERROR]: state => {
      return {
        ...state,
        isLoading: false,
      };
    },
    [ADD_TODO_REQUEST]: state => {
      return {
        ...state,
        addTodoStatus: 'request',
        isLoading: true,
      };
    },
    [ADD_TODO_SUCCESS]: state => {
      return {
        ...state,
        addTodoStatus: 'success',
        isLoading: false,
      };
    },
    [ADD_TODO_ERROR]: (state, action) => {
      return {
        ...state,
        addTodoError: action.error.response.data,
        isLoading: false,
      };
    },
    [STATUS_INIT]: state => {
      return {
        ...state,
        addTodoStatus: '',
        addTodoError: [],
        editTodoStatus: '',
        editTodoError: [],
        deleteStatus: '',
      };
    },

    [EDIT_TODO_REQUEST]: (state, action) => {
      return {
        ...state,
        editTodoStatus: 'request',
        isLoading: true,
      };
    },
    [EDIT_TODO_SUCCESS]: (state, action) => {
      const { id } = action.data;
      const nextTodoList = state.todoList.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            ...action.data,
          };
        }
        return todo;
      });

      return {
        ...state,
        editTodoStatus: 'success',
        todoList: nextTodoList,
        isLoading: false,
      };
    },
    [EDIT_TODO_ERROR]: (state, action) => {
      return {
        ...state,
        editTodoError: action.error.response.data,
        isLoading: false,
      };
    },
    [DELETE_TODO_REQUEST]: (state, action) => {
      return {
        ...state,
        deleteStatus: 'request',
      };
    },
    [DELETE_TODO_SUCCESS]: state => {
      return {
        ...state,
        deleteStatus: 'success',
      };
    },
    [DELETE_TODO_ERROR]: state => {
      return {
        ...state,
        isLoading: false,
      };
    },
  },
  defaultState
);

export default todos;
