import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, TodoForm } from '../../components';
import { attachPrefix, extractFromString } from '../../util/util';
import { DELETE_TODO_REQUEST, EDIT_TODO_REQUEST } from '../../reducers/todos';

const EditContainer = ({
  id,
  todoValue: preTodoValue,
  refValue: preRefValue,
  onClickCancel,
}) => {
  const dispatch = useDispatch();
  const [todoValue, setTodoText] = useState(preTodoValue);
  const [refValue, setTodoRefId] = useState(attachPrefix(preRefValue, '@'));

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
        refId: extractFromString(refValue, '@'),
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
  id: PropTypes.string.isRequired,
  todoValue: PropTypes.string.isRequired,
  refValue: PropTypes.string.isRequired,
  onClickCancel: PropTypes.func.isRequired,
};

export default EditContainer;
