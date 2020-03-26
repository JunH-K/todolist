import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TODO_LIST_REQUEST } from '../reducers/todos';

const TodoContainer = ({
  match: {
    params: { page },
  },
}) => {
  const dispatch = useDispatch();
  const { todoList } = useSelector(state => state.todos);

  useEffect(() => {
    dispatch({ type: TODO_LIST_REQUEST, data: { page } });
  }, []);

  return 'test';
};

export default TodoContainer;
