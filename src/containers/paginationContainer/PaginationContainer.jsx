import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import querystring from 'querystring';
import { Pagination } from '../../components';

const PaginationContainer = () => {
  const { queryString: preQueryString } = useSelector(state => state.todos);
  const { pageInfo } = useSelector(state => state.todos);
  const { pageCount = [], totalPage, isPrePage, isNextPage } = pageInfo;
  const { page, ...rest } = preQueryString;
  const curPage = parseInt(page, 10);

  const createQueryString = useCallback(query => {
    const nextQueryString = {};
    Object.keys(query).forEach(key => {
      if (query[key]) {
        nextQueryString[key] = query[key];
      }
    });

    const resultQueryString = querystring.stringify(nextQueryString);

    return resultQueryString !== '' ? `?${resultQueryString}` : '';
  }, []);
  const queryString = createQueryString(rest);

  return (
    <Pagination
      totalPage={totalPage}
      curPage={curPage}
      queryString={queryString}
      isPrePage={isPrePage}
      pageCount={pageCount}
      isNextPage={isNextPage}
    />
  );
};

export default PaginationContainer;
