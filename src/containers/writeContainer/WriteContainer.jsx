import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showToast, TodoForm } from '../../components';
import { ADD_TODO_REQUEST, TODO_LIST_REQUEST } from '../../reducers/todos';
import { attachPrefix, extractFromString } from '../../util/util';

const WriteContainer = () => {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState('');
  const [refValue, setRefValue] = useState('');
  const { addTodoStatus, addTodoError } = useSelector(state => state.todos);

  useEffect(() => {
    if (addTodoStatus === 'success') {
      showToast('할일 추가 완료!');
      setTodoValue('');
      setRefValue('');
      dispatch({ type: TODO_LIST_REQUEST, data: { page: 1 } });
    }
  }, [addTodoStatus]);

  useEffect(() => {
    const { refTodo = [] } = addTodoError;
    if (refTodo.length) {
      showToast(`${attachPrefix(refTodo, '@')} 존재하지 않는 Todo 입니다`);
    }
  }, [addTodoError]);

  const onChangeTodo = useCallback(e => {
    setTodoValue(e.target.value);
  }, []);

  const onChangeRefId = useCallback(e => {
    setRefValue(e.target.value);
  }, []);

  const onClickAddTodo = useCallback(() => {
    dispatch({
      type: ADD_TODO_REQUEST,
      data: {
        content: todoValue,
        refTodo: extractFromString(refValue, '@'),
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
