import React from 'react';
import PropTypes from 'prop-types';
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

Header.defaultProps = {
  onChange: undefined,
  onKeyDown: undefined,
  onClickMoreAction: undefined,
  search: '',
  children: null,
};
Header.propTypes = {
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onClickMoreAction: PropTypes.func,
  search: PropTypes.string,
  children: PropTypes.node,
};
export default Header;
