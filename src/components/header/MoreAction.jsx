import React from 'react';
import { MoreActionStyle, MoreActonContainerStyle } from './Style';

const memus = [
  { name: '생성일 정렬', key: 'create' },
  { name: '수정일 정렬', key: 'update' },
  '',
  { name: '완료목록보기', key: 'visibleDone' },
  { name: '완료목록숨기기', key: 'invisibleDone' },
  '',
  { name: '백업', key: 'backup' },
  { name: '복원', key: 'restore' },
];

const MoreAction = ({ onClickOutside, onClickMenuItem }) => {
  return (
    <MoreActonContainerStyle onClick={onClickOutside}>
      <MoreActionStyle className="more-action-menu" onClick={onClickMenuItem}>
        {memus.map(item => {
          if (!item) {
            return <hr />;
          }
          return (
            <div className="menu" data-menu={item.key}>
              {item.name}
            </div>
          );
        })}
      </MoreActionStyle>
    </MoreActonContainerStyle>
  );
};

export default MoreAction;
