import React, { useCallback, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MoreActionStyle, MoreActonContainerStyle } from './Style';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import querystring from 'querystring';
import dataManager, { BACKUP_REQUEST } from '../../reducers/dataManager';

const menus = [
  { name: '생성일 오름차순', key: 'createdAsc' },
  { name: '생성일 내림차순', key: 'createdDesc' },
  '',
  { name: '수정일 오름차순', key: 'updatedAsc' },
  { name: '수정일 내림차순', key: 'updatedDesc' },
  '',
  { name: '전체목록 표시', key: 'all' },
  { name: '완료목록 표시', key: 'done' },
  { name: '미완료목록 표시', key: 'undone' },
  '',
];

const menusQuery = {
  createdAsc: { sort: 'createdAt', order: 'asc' },
  createdDesc: { sort: 'createdAt', order: 'desc' },
  updatedAsc: { sort: 'updateAt', order: 'asc' },
  updatedDesc: { sort: 'updateAt', order: 'desc' },
  all: { done: '' },
  done: { done: true },
  undone: { done: false },
};

const MoreAction = ({ onClickOutside }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { queryString } = useSelector(state => state.todos);
  const { backupData } = useSelector(state => state.dataManager);
  const download = useRef(null);

  useEffect(() => {
    download.current.href = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(backupData)
    )}`;
  }, [dataManager]);

  const combineQueryString = useCallback(
    menu => {
      let querys = {};

      Object.keys(queryString)
        .filter(query => query !== 'page')
        .forEach(query => {
          if (queryString[query]) {
            querys[query] = queryString[query];
          }
        });

      querys = {
        ...querys,
        ...menusQuery[menu],
      };
      return querys;
    },
    [queryString]
  );

  const onClickMenuItem = useCallback(e => {
    const {
      target: {
        dataset: { menu },
      },
    } = e;

    if (!menu) {
      return;
    }

    const string = combineQueryString(menu);

    history.push(`/page/1?${querystring.stringify(string)}`);
  }, []);

  const backup = () => {
    dispatch({ type: BACKUP_REQUEST });
  };

  const restore = () => {};

  return (
    <MoreActonContainerStyle onClick={onClickOutside}>
      <MoreActionStyle className="more-action-menu" onClick={onClickMenuItem}>
        {menus.map((item, index) => {
          if (!item) {
            return <hr key={index} />;
          }
          return (
            <div className="menu" data-menu={item.key} key={item.key}>
              {item.name}
            </div>
          );
        })}
        <a onClick={backup} id="download" download="backup.json" ref={download}>
          <div className="menu">데이터 백업</div>
        </a>
        <a>
          <div className="menu">데이터 복원</div>
        </a>
      </MoreActionStyle>
    </MoreActonContainerStyle>
  );
};

MoreAction.propTypes = {
  onClickOutside: PropTypes.func.isRequired,
};

export default MoreAction;
