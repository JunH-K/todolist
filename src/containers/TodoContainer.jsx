import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TODO_LIST_REQUEST } from '../reducers/todos';
import { Alert, Header, Pagination } from '../components';
import Container from './Style';
import WriteContainer from './WriteContainer';
import TodoListContainer from './TodoListContainer';

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
        <WriteContainer />
        <TodoListContainer todoList={todoList} />
      </Container>
      <Pagination />
      <Alert />
    </>
  );
};

export default TodoContainer;
