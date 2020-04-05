import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import querystring from 'querystring';
import { MoreAction } from '../../components';
import DataManagerContainer from '../dataManagerContainer/DataManagerContainer';
import { MENUS, MENUS_QUERY } from './Constant';

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
        ...MENUS_QUERY[menu],
      };
      return querys;
    },
    [queryString]
  );

  const onClickMenuItem = useCallback(
    e => {
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
    },
    [queryString]
  );

  return (
    <MoreAction
      menus={MENUS}
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
