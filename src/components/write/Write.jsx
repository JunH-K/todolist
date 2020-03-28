import React from 'react';
import WriteStyle from './Style';
import { Button, InputText } from '..';

const Write = ({
  todoValue,
  refValue,
  completeText,
  onClickComplete,
  children,
}) => {
  return (
    <WriteStyle>
      <div className="write-todo">
        <InputText type="text" placeholder="할일입력.." />
        <Button
          type="button"
          className="add"
          onClick={onClickComplete}
          name={completeText}
        />
      </div>
      <div className="write-ref">
        <InputText type="text" placeholder="참조 Todo 아이디입력.. ex) @1@5" />
        <Button type="button" className="cancel" name={'취소'} />
        <Button type="button" className="delete" name={'삭제'} />
      </div>
    </WriteStyle>
  );
};

export default Write;
