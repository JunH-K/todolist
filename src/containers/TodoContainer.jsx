import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { TODO_LIST_REQUEST } from '../reducers/todos';
import { Alert, Header, Write, TodoList, Pagination } from '../components';

const Container = styled.div`
  position: relative;
  width: 50vw;
  margin: 0 auto;
  border: 1px solid #a1a1a1;
  transition: all 0.5s;

  @media (max-width: 768px) {
    width: 100vw;
    transition: all 0.5s;
    border-left: none;
    border-right: none;
    border-top: none;
  }
`;

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
