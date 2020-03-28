import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TODO_LIST_REQUEST } from '../reducers/todos';
import { Alert, Header, Write, TodoList, Pagination } from '../components';
import Container from './Style';

const TodoContainer = ({
  match: {
    params: { page },
  },
}) => {
  const dispatch = useDispatch();
  const { todoList } = useSelector(state => state.todos);

  useEffect(() => {
    dispatch({ type: TODO_LIST_REQUEST, data: { page } });
  }, [page]);

  return (
    <>
      <Container>
        <Header />
        <Write completeText="할일 추가" />
        <TodoList todoList={todoList} />
      </Container>
      <Pagination />
      <Alert />
    </>
  );
};

export default TodoContainer;
