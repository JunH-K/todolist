import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import querystring from 'querystring';
import axios from 'axios';
import { MoreActionStyle, MoreActonContainerStyle } from './Style';
import { showToast } from '..';
import { ADD_TODO_REQUEST } from '../../reducers/todos';

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
  const download = useRef(null);
  const restore = useRef(null);

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
      showToast('백업중..');
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

  const onClickRestore = () => {
    restore.current.click();
  };

  const onChangeHandleFiles = e => {
    const [file] = e.target.files;
    if (file) {
      file.text().then(data => {
        const backup = JSON.parse(data);
        showToast('데이터 복원 중...');
        dispatch({
          type: ADD_TODO_REQUEST,
          data: backup,
        });
      });
    }
  };

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
          download="backupTodo.json"
          ref={download}
          style={{ display: 'none' }}
        >
          데이터백업
        </a>
        <div onClick={onClickBackup} className="menu">
          데이터 백업
        </div>
        <input
          type="file"
          id="fileElem"
          multiple
          accept="application/json"
          style={{ display: 'none' }}
          ref={restore}
          onChange={onChangeHandleFiles}
        />
        <div
          onClick={onClickRestore}
          className="menu"
          title="할일이 복원파일로 대체됩니다."
        >
          데이터 복원
        </div>
      </MoreActionStyle>
    </MoreActonContainerStyle>
  );
};

MoreAction.propTypes = {
  onClickOutside: PropTypes.func.isRequired,
};

export default MoreAction;
