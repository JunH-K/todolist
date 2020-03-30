import React, { useCallback, useState } from 'react';
import { TodoFormStyle } from './Style';
import { Button, InputText } from '../index';
import { useDispatch } from 'react-redux';
import { ADD_TODO } from '../../reducers/todos';
import { isRefIdValid } from '../../util/util';

const TodoForm = ({
  todoValue,
  refValue,
  doneText,
  children,
  onChangeTodo,
  onChangeRefId,
  onClickAddTodo,
}) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const isValidCallback = isValid => {
    setIsDisabled(!isValid);
  };

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
          disabled={isDisabled}
        />
      </div>
      <div className="write-ref">
        <InputText
          type="text"
          placeholder="참조 Todo 아이디입력.. ex) @1@5"
          onChange={onChangeRefId}
          defaultValue={refValue}
          validationFunc={isRefIdValid}
          isValidCallback={isValidCallback}
        />
        {children}
      </div>
    </TodoFormStyle>
  );
};

export default TodoForm;
