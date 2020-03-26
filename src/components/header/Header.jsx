import React from 'react';
import { HeaderStyle, MoreActionStyle } from './Style';
import InputText from '../form/InputText';
import { Button } from '..';

const Header = props => {
  return (
    <HeaderStyle>
      <InputText
        className="search"
        placeholder="검색 ex) 내용 , 날짜:20200101"
      />
      <Button type="button" className="more-action" name="더보기" />
      <MoreActionStyle className="more-action-menu">
        <div className="menu">생성일 정렬</div>
        <div className="menu">수정일 정렬</div>
        <hr />
        <div className="menu">완료목록보기</div>
        <div className="menu">완료목록숨기기</div>
        <hr />
        <div className="menu">백업</div>
        <div className="menu">복원</div>
      </MoreActionStyle>
    </HeaderStyle>
  );
};

export default Header;
