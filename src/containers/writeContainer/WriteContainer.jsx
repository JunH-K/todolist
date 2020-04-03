import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TodoForm } from '../../components';
import { ADD_TODO_REQUEST } from '../../reducers/todos';
import { extractFromString } from '../../util/util';

const WriteContainer = () => {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState('');
  const [refValue, setRefValue] = useState('');

  const onChangeTodo = useCallback(e => {
    setTodoValue(e.target.value);
  }, []);

  const onChangeRefId = useCallback(e => {
    setRefValue(e.target.value);
  }, []);

  const onClickAddTodo = useCallback(() => {
    setTodoValue('');
    setRefValue('');
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
