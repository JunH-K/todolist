import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Button, showToast, TodoForm } from '../../components';
import { attachPrefix, extractFromString } from '../../util/util';
import {
  DELETE_TODO_REQUEST,
  EDIT_TODO_REQUEST,
  TODO_LIST_REQUEST,
} from '../../reducers/todos';

const EditContainer = ({
  id,
  todoValue: preTodoValue,
  refValue: preRefValue,
  onClickCancel,
}) => {
  const dispatch = useDispatch();
  const [todoValue, setTodoText] = useState(preTodoValue);
  const [refValue, setTodoRefId] = useState(attachPrefix(preRefValue, '@'));
  const { editTodoStatus, editTodoError } = useSelector(state => state.todos);

  useEffect(() => {
    if (editTodoStatus === 'success') {
      showToast('수정 완료!');
      dispatch({ type: TODO_LIST_REQUEST, data: { page: 1 } });
    }
  }, [editTodoStatus]);

  useEffect(() => {
    const { refTodo = [] } = editTodoError;
    if (refTodo.length) {
      showToast(`${attachPrefix(refTodo, '@')} 존재하지 않는 Todo 입니다`);
    }
  }, [editTodoError]);

  const onChangeTodo = useCallback(e => {
    setTodoText(e.target.value);
  }, []);

  const onChangeRefId = useCallback(e => {
    setTodoRefId(e.target.value);
  }, []);

  const onClickDone = useCallback(() => {
    dispatch({
      type: EDIT_TODO_REQUEST,
      data: {
        id,
        content: todoValue,
        refTodo: extractFromString(refValue, '@'),
      },
    });
  }, [todoValue, refValue]);

  const onClickDelete = useCallback(() => {
    dispatch({
      type: DELETE_TODO_REQUEST,
      data: {
        id,
      },
    });
  }, []);

  return (
    <TodoForm
      todoValue={todoValue}
      refValue={refValue}
      doneText="수정완료"
      onChangeTodo={onChangeTodo}
      onChangeRefId={onChangeRefId}
      onClickAddTodo={onClickDone}
    >
      <Button
        type="button"
        className="cancel"
        name="취소"
        onClick={onClickCancel}
      />
      <Button
        type="button"
        className="delete"
        name="삭제"
        onClick={onClickDelete}
      />
    </TodoForm>
  );
};

EditContainer.propTypes = {
  id: PropTypes.number.isRequired,
  todoValue: PropTypes.string.isRequired,
  refValue: PropTypes.string.isRequired,
  onClickCancel: PropTypes.func.isRequired,
};

export default EditContainer;
