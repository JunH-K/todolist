import React, { useCallback, useState } from 'react';
import WriteStyle from './Style';
import { Button, InputText } from '..';
import { useDispatch } from 'react-redux';
import { ADD_TODO } from '../../reducers/todos';

const Write = ({ todoValue, refValue, completeText, children }) => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');
  const [todoRefId, setTodoRefId] = useState('');

  const onChangeTodo = useCallback(e => {
    setTodoText(e.target.value);
  }, []);

  const onChangeRefId = useCallback(e => {
    setTodoRefId(e.target.value);
  }, []);

  const onClickAddTodo = useCallback(() => {
    dispatch({
      type: ADD_TODO,
      data: {
        content: todoText,
        refId: todoRefId,
        done: false,
      },
    });
  }, [todoText, todoRefId]);

  return (
    <WriteStyle>
      <div className="write-todo">
        <InputText
          type="text"
          placeholder="할일입력.."
          onChange={onChangeTodo}
          defaultValue={todoText}
        />
        <Button
          type="button"
          className="add"
          onClick={onClickAddTodo}
          name={completeText}
        />
      </div>
      <div className="write-ref">
        <InputText
          type="text"
          placeholder="참조 Todo 아이디입력.. ex) @1@5"
          onChange={onChangeRefId}
          defaultValue={todoRefId}
        />
        <Button type="button" className="cancel" name={'취소'} />
        <Button type="button" className="delete" name={'삭제'} />
      </div>
    </WriteStyle>
  );
};

export default Write;
