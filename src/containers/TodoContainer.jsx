import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TODO_LIST_REQUEST } from '../reducers/todos';
import { Header, Pagination } from '../components';
import Container from './Style';
import WriteContainer from './WriteContainer';
import TodoListContainer from './TodoListContainer';

const TodoContainer = props => {
  const {
    match: {
      params: { page = 1 },
    },
  } = props;

  const dispatch = useDispatch();
  const { todoList, pageInfo } = useSelector(state => state.todos);

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
      <Pagination pageInfo={pageInfo} />
    </>
  );
};

export default TodoContainer;
