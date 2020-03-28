import React from 'react';
import { HeaderStyle, MoreActionStyle } from './Style';
import InputText from '../form/InputText';
import { Button } from '..';
import MoreAction from './MoreAction';

const Header = props => {
  return (
    <HeaderStyle>
      <InputText
        className="search"
        placeholder="검색 ex) 내용 , 날짜:20200101"
      />
      <Button type="button" className="more-action" name="더보기" />
      {/*<MoreAction />*/}
    </HeaderStyle>
  );
};

export default Header;
