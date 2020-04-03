import React, { useState } from 'react';
import { TodoFormStyle } from './Style';
import { Button, InputText } from '../index';
import { isRefIdValid } from '../../util/util';

const TodoForm = ({
  todoValue,
  refValue,
  doneText,
  children,
  onChangeTodo,
  onChangeRefId,
  onClickAddTodo,
  maxValue = 100,
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
          value={todoValue}
          maxLength={maxValue}
        />
        <Button
          type="button"
          className="add"
          onClick={onClickAddTodo}
          name={doneText}
          disabled={isDisabled || !todoValue}
        />
      </div>
      <div className="write-ref">
        <InputText
          type="text"
          placeholder="참조 Todo 아이디입력.. ex) @1@5"
          onChange={onChangeRefId}
          value={refValue}
          validationFunc={isRefIdValid}
          isValidCallback={isValidCallback}
        />
        {children}
      </div>
    </TodoFormStyle>
  );
};

export default TodoForm;
