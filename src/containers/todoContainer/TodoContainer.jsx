import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { TODO_LIST_REQUEST } from '../../reducers/todos';
import Container from './Style';
import WriteContainer from '../writeContainer/WriteContainer';
import TodoListContainer from '../todoListContainer/TodoListContainer';
import HeaderContainer from '../headerContainer/HeaderContainer';
import PaginationContainer from '../paginationContainer/PaginationContainer';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const getQuery = queryString => {
  const query = useQuery();
  const queryObj = {};
  queryString.forEach(str => {
    queryObj[str] = query.get(str) || '';
  });
  return queryObj;
};

const TodoContainer = () => {
  const { page = 1 } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const queryStrings = {
    page,
    ...getQuery(['searchText', 'sort', 'order', 'done', 'searchId']),
  };

  useEffect(() => {
    dispatch({ type: TODO_LIST_REQUEST, data: queryStrings });
  }, [location]);

  return (
    <>
      <Container>
        <HeaderContainer />
        <WriteContainer />
        <TodoListContainer />
      </Container>
      <PaginationContainer />
    </>
  );
};

export default TodoContainer;
