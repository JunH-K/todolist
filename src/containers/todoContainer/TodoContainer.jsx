import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { TODO_LIST_REQUEST } from '../../reducers/todos';
import { Header, Pagination } from '../../components';
import Container from './Style';
import WriteContainer from '../writeContainer/WriteContainer';
import TodoListContainer from '../todoListContainer/TodoListContainer';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const getQuey = querys => {
  const query = useQuery();
  const queryObj = {};
  querys.forEach(queryString => {
    queryObj[queryString] = query.get(queryString) || '';
  });
  return queryObj;
};

const TodoContainer = () => {
  const { page = 1 } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const { todoList, pageInfo } = useSelector(state => state.todos);
  const queryStrings = {
    page,
    ...getQuey(['searchText', 'sort', 'order', 'done', 'searchId']),
  };

  useEffect(() => {
    dispatch({ type: TODO_LIST_REQUEST, data: queryStrings });
  }, [location]);

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
