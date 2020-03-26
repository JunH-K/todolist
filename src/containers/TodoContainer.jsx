import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { TODO_LIST_REQUEST } from '../reducers/todos';
import { Alert } from '../components';

const Wrapper = styled.div`
  position: relative;
  width: 50vw;
  min-width: 480px;
  max-width: 768px;
  margin: 0 auto;
  border: 1px solid #a1a1a1;
`;

const MoreAction = styled.div`
  width: 150px;
  position: absolute;
  padding: 5px;
  top: 40px;
  right: -87px;
  border-radius: 1px;
  border: 1px solid #6e6e6e;
  background: #f4f4f4;
  z-index: 1;

  .menu {
    height: 20px;
    padding-left: 5px;
    line-height: 20px;
    margin-top: 5px;
    cursor: pointer;
  }

  .menu:hover {
    background: #c5c5c5;
  }
`;

const Header = styled.div`
  position: relative;
  height: 50px;
  background: #0078d7;

  .search {
    position: absolute;
    width:77%
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    border-radius:2px;
  }

  .more-action {
    float: right;
    position: absolute;
    top: 50%;
    right: 10px;
    width: 20%;
    transform: translateY(-50%);
  }
`;

const Button = styled.button`
  background-color: #7c7c7c;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 2px;
  height: 30px;
`;

const CheckBox = styled.input.attrs({
  type: 'checkbox',
  checked: true,
})`
  -ms-transform: scale(1.5); /* IE */
  -moz-transform: scale(1.5); /* FF */
  -webkit-transform: scale(1.5); /* Safari and Chrome */
  -o-transform: scale(1.5); /* Opera */
  transform: scale(1.5);
`;

const InputText = styled.input`
  padding: 5px 5px;
  display: inline-block;
  width: 80%;
  height: 30px;
  border: 1px solid #ccc;
`;

const Write = styled.div`
  margin: 5px;
  padding: 5px;
  border: 1px solid #a1a1a1;

  input {
    width: 79%;
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
  }

  input:focus {
    border-bottom: 1px solid #0078d7;
  }

  .write-todo {
    position: relative;
    margin-bottom: 2px;
  }

  .write-todo .add {
    width: 20%;
  }

  .write-ref {
    position: relative;
    margin-bottom: 2px;
  }

  .cancel {
    width: 9%;
    margin-right: 2%;
  }

  .delete {
    width: 9%;
  }
`;

const Todo = styled.div`
  border-bottom: 1px solid #f0f0f0;
  line-height: 30px;
  padding-left: 10px;

  .ref-id {
    color: #7a7a7a;
    font-size: 13px;
  }

  .complete {
    text-decoration: line-through;
    color: #b6b6b6;
  }

  .date {
    left: 10px;
    font-size: 11px;
    padding-left: 20px;
    color: #7a7a7a;
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
        <Header>
          <InputText
            type="text"
            className="search"
            placeholder="검색 ex) 내용 , 날짜:20200101"
          />
          <Button type="button" className="more-action">
            더보기
          </Button>
          <MoreAction className="more-action-menu">
            <div className="menu">생성일 정렬</div>
            <div className="menu">수정일 정렬</div>
            <hr />
            <div className="menu">완료목록보기</div>
            <div className="menu">완료목록숨기기</div>
            <hr />
            <div className="menu">백업</div>
            <div className="menu">복원</div>
          </MoreAction>
        </Header>

        <div className="content">
          <Write>
            <div className="write-todo">
              <InputText type="text" placeholder="할일입력.." />
              <Button type="button" className="add">
                할일추가
              </Button>
            </div>
            <div className="write-ref">
              <InputText
                type="text"
                placeholder="참조 Todo 아이디입력.. ex) @1@5"
              />
            </div>
          </Write>

          <Todo>
            <CheckBox type="checkbox" id="1" name="vehicle1" checked />
            <span data-id="1">1</span>
            <span className="complete" title="클릭하여 수정 or 삭제">
              {' '}
              할일~
            </span>
            <div className="ref-id">
              <p>@1@5</p>
            </div>
            <div className="date">
              <span>생성 : 2020.1.1</span>
              <span>수정 : 2020.1.1</span>
            </div>
          </Todo>

          <Write className="write">
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
          </Write>
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
