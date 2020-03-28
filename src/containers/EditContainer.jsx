import React, { useCallback, useState } from 'react';
import { Button, TodoForm } from '../components';
import { useDispatch } from 'react-redux';

const EditContainer = ({
  todoValue,
  refValue,
  completeText,
  children,
  onClickCancel,
}) => {
  return (
    <TodoForm todoValue={todoValue} refValue={refValue} doneText="수정완료">
      <Button
        type="button"
        className="cancel"
        name="취소"
        onClick={onClickCancel}
      />
      <Button type="button" className="delete" name="삭제" />
    </TodoForm>
  );
};

export default EditContainer;
