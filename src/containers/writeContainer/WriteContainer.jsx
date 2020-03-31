import React, { useCallback, useState } from 'react';
import { TodoForm } from '../../components';
import { useDispatch } from 'react-redux';
import { ADD_TODO_REQUEST } from '../../reducers/todos';
import { extractFromString } from '../../util/util';

const WriteContainer = () => {
  const dispatch = useDispatch();
  const [todoValue, setTodoText] = useState('');
  const [refValue, setTodoRefId] = useState('');

  const onChangeTodo = useCallback(e => {
    setTodoText(e.target.value);
  }, []);

  const onChangeRefId = useCallback(e => {
    setTodoRefId(e.target.value);
  }, []);

  const onClickAddTodo = useCallback(() => {
    dispatch({
      type: ADD_TODO_REQUEST,
      data: {
        content: todoValue,
        refId: extractFromString(refValue, '@'),
        done: false,
      },
    });
  }, [todoValue, refValue]);

  return (
    <TodoForm
      todoValue={todoValue}
      refValue={refValue}
      doneText="할일 추가"
      onChangeTodo={onChangeTodo}
      onChangeRefId={onChangeRefId}
      onClickAddTodo={onClickAddTodo}
    />
  );
};

export default WriteContainer;
