import React from 'react';
import { HeaderStyle, MoreActionStyle } from './Style';

const MoreAction = () => {
  return (
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
  );
};

export default MoreAction;
