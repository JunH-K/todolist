import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import querystring from 'querystring';
import axios from 'axios';
import { MoreActionStyle, MoreActonContainerStyle } from './Style';
import { showToast } from '..';

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
  const history = useHistory();
  const { queryString } = useSelector(state => state.todos);
  const download = useRef(null);

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

  const fetchBackupData = async () => {
    try {
      const backupData = await axios.get('/todos');
      return backupData.data.row;
    } catch (error) {
      console.error(error);
      showToast('백업실패');
    }
  };

  const onClickBackup = () => {
    fetchBackupData().then(backupData => {
      download.current.href = `data:text/json;charset=utf-8,${encodeURIComponent(
        JSON.stringify(backupData)
      )}`;
      download.current.click();
    });
  };

  const onClickRestore = () => {};

  return (
    <MoreActonContainerStyle onClick={onClickOutside} data-name="outside">
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
        <a
          id="download"
          download="backup.json"
          ref={download}
          style={{ display: 'none' }}
        >
          데이터백업
        </a>
        <div onClick={onClickBackup} className="menu">
          데이터 백업
        </div>
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
