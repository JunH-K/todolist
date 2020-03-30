import React, { useState } from 'react';
import styled from 'styled-components';
import { getMillisecondsToDate } from '../util/util';
import EditContainer from './EditContainer';

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

const TodoListContainer = ({ todoList = [], onChangeChecked }) => {
  const [editId, setEditId] = useState(-1);

  const onChange = id => () => {
    onChangeChecked === 'function' && onChangeChecked(id);
  };

  const onClickEdit = id => () => {
    setEditId(id);
  };

  const onClickCancel = () => {
    setEditId(-1);
  };

  return todoList.map((todo, index) => {
    if (todo.id === editId) {
      return (
        <EditContainer
          todoValue={todo.content}
          refValue={todo.refId}
          key={todo.id + todo.createdAt}
          onClickCancel={onClickCancel}
        />
      );
    }

    return (
      <TodoStyle key={todo.id + todo.createdAt} done={todo.done}>
        <CheckBox
          type="checkbox"
          id="1"
          name="vehicle1"
          checked={todo.done}
          onChange={onChange(todo.id)}
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
          <p>
            {Array.isArray(todo.refId) &&
              todo.refId.reduce((preValue, curValue) => {
                return `${preValue}@${curValue}`;
              }, '')}
          </p>
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
