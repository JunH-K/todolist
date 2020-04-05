import React from 'react';
import { HeaderStyle } from './Style';
import InputText from '../form/InputText';
import { Button } from '..';

const Header = ({
  onChange,
  onKeyDown,
  search,
  onClickMoreAction,
  children,
}) => {
  return (
    <HeaderStyle>
      <InputText
        className="search"
        placeholder="검색 ex) 내용 , @1"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={search}
      />
      <Button
        type="button"
        className="more-action"
        name="더보기"
        onClick={onClickMoreAction}
      />
      {children}
    </HeaderStyle>
  );
};

export default Header;
