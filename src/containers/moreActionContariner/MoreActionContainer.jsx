import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import querystring from 'querystring';
import MoreAction from '../../components/header/MoreAction';
import DataManagerContainer from '../dataManagerContainer/DataManagerContainer';

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

const MoreActionContainer = ({ onClickOutside }) => {
  const history = useHistory();
  const { queryString } = useSelector(state => state.todos);
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

  return (
    <MoreAction
      menus={menus}
      onClickMenuItem={onClickMenuItem}
      onClickOutside={onClickOutside}
    >
      <DataManagerContainer />
    </MoreAction>
  );
};

MoreActionContainer.propTypes = {
  onClickOutside: PropTypes.func.isRequired,
};

export default MoreActionContainer;