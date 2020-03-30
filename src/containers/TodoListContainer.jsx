import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { attachPrefix, getMillisecondsToDate } from '../util/util';
import EditContainer from './EditContainer';
import { EDIT_TODO_REQUEST } from '../reducers/todos';

const CheckBox = styled.input.attrs({
  type: 'checkbox',
})`
  -ms-transform: scale(1.5); /* IE */
  -moz-transform: scale(1.5); /* FF */
  -webkit-transform: scale(1.5); /* Safari and Chrome */
  -o-transform: scale(1.5); /* Opera */
  transform: scale(1.5);
`;

const TodoStyle = styled.div`
  border-bottom: 1px solid #f0f0f0;
  line-height: 30px;
  padding-left: 10px;

  .todo-id {
    font-weight: bold;
    margin-left: 5px;
    margin-right: 5px;
  }

  .ref-id {
    color: #7a7a7a;
    font-size: 13px;
  }

  .content {
    ${({ done }) => {
      if (done) {
        return 'text-decoration: line-through;color: #b6b6b6;';
      }
    }}
  }

  .date {
    left: 10px;
    font-size: 11px;
    padding-left: 20px;
    color: #7a7a7a;
  }

  .date .create-date {
    margin-right: 5px;
  }
`;

const TodoListContainer = ({ todoList = [] }) => {
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(-1);
  const noEditing = useRef(-1);

  useEffect(() => {
    setEditId(noEditing.current);
  }, [todoList]);

  const checkRefTodo = id => {
    const [todo] = todoList.filter(todo => {
      return todo.id === id;
    });

    const { refId = [] } = todo;

    const isDoneRefTodo = todoList
      .filter(todo => {
        return refId.includes(todo.id.toString());
      })
      .every(todo => {
        return todo.done;
      });

    return isDoneRefTodo;
  };

  const onChangeChecked = id => e => {
    const isAllDone = checkRefTodo(id);

    if (!isAllDone) {
      return;
    }

    dispatch({
      type: EDIT_TODO_REQUEST,
      data: {
        id,
        done: e.target.checked,
      },
    });
  };

  const onClickEdit = id => () => {
    setEditId(id);
  };

  const onClickCancel = () => {
    setEditId(noEditing.current);
  };

  return todoList.map(todo => {
    if (todo.id === editId) {
      return (
        <EditContainer
          todoValue={todo.content}
          refValue={todo.refId}
          id={todo.id}
          key={todo.id + todo.createdAt}
          onClickCancel={onClickCancel}
        />
      );
    }

    return (
      <TodoStyle key={todo.id + todo.createdAt} done={todo.done}>
        <CheckBox
          type="checkbox"
          checked={todo.done}
          onChange={onChangeChecked(todo.id)}
        />
        <span data-id="1" className="todo-id">
          {todo.id}
        </span>
        <span
          className="content"
          title="클릭하여 수정 or 삭제"
          onClick={onClickEdit(todo.id)}
        >
          {todo.content}
        </span>
        <div className="ref-id">
          <p>{Array.isArray(todo.refId) && attachPrefix(todo.refId, '@')}</p>
        </div>
        <div className="date">
          <span className="create-date">
            생성 : {getMillisecondsToDate(todo.createdAt)}
          </span>
          <span className="update-date">
            수정 : {getMillisecondsToDate(todo.updateAt)}
          </span>
        </div>
      </TodoStyle>
    );
  });
};

export default TodoListContainer;
