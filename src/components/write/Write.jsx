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
        <Button type="button" className="add" onClick={onClickComplete}>
          {completeText}
        </Button>
      </div>
      <div className="write-ref">
        <InputText type="text" placeholder="참조 Todo 아이디입력.. ex) @1@5" />
        {children}
        <Button type="button" className="cancel">
          취소
        </Button>
        <Button type="button" className="delete">
          삭제
        </Button>
      </div>
    </WriteStyle>
  );
};

export default Write;
