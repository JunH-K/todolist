import React, { useCallback, useState } from 'react';
import { TodoFormStyle } from './Style';
import { Button, InputText } from '../index';
import { useDispatch } from 'react-redux';
import { ADD_TODO } from '../../reducers/todos';

const TodoForm = ({
  todoValue,
  refValue,
  doneText,
  children,
  onChangeTodo,
  onChangeRefId,
  onClickAddTodo,
}) => {
  return (
    <TodoFormStyle>
      <div className="write-todo">
        <InputText
          type="text"
          placeholder="할일입력.."
          onChange={onChangeTodo}
          defaultValue={todoValue}
        />
        <Button
          type="button"
          className="add"
          onClick={onClickAddTodo}
          name={doneText}
        />
      </div>
      <div className="write-ref">
        <InputText
          type="text"
          placeholder="참조 Todo 아이디입력.. ex) @1@5"
          onChange={onChangeRefId}
          defaultValue={refValue}
        />
        {children}
      </div>
    </TodoFormStyle>
  );
};

export default TodoForm;
