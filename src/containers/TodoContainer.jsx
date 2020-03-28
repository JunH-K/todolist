import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { TODO_LIST_REQUEST } from '../reducers/todos';
import { Alert, Header, Write, TodoList } from '../components';

const Wrapper = styled.div`
  position: relative;
  width: 50vw;
  // min-width: 480px;
  // max-width: 768px;
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

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 10px;

  a {
    color: black;
    padding: 8px 16px;
    text-decoration: none;
  }

  a.active {
    background-color: #7c7c7c;
    color: white;
    border-radius: 5px;
  }

  a:hover:not(.active) {
    background-color: #ddd;
    border-radius: 5px;
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
      <Wrapper>
        <div className="content">
          <Header />
          <Write completeText="할일 추가" />
          <TodoList todoList={todoList} />

          {/* <Write className="write">
            <div className="write-todo">
              <InputText type="text" placeholder="할일입력.." />
              <Button type="button" className="add">
                할일수정
              </Button>
            </div>
            <div className="write-ref">
              <InputText
                type="text"
                placeholder="참조 Todo 아이디입력.. ex) @1@5"
              />
              <Button type="button" className="cancel">
                취소
              </Button>
              <Button type="button" className="delete">
                삭제
              </Button>
            </div>
          </Write> */}
        </div>
      </Wrapper>

      <Pagination className="pagination">
        <a href="#" title="처음으로">
          &laquo;
        </a>
        <a href="#" className="active">
          1
        </a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#" title="마지막으로">
          &raquo;
        </a>
      </Pagination>

      <Alert />
    </>
  );
};

export default TodoContainer;
