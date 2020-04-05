import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import querystring from 'querystring';
import PaginationStyle from './Style';

const Pagination = props => {
  const {
    pageInfo: { pageCount = [], totalPage, isPrePage, isNextPage },
  } = props;

  const { queryString: preQueryString } = useSelector(state => state.todos);
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
    <PaginationStyle className="pagination">
      {totalPage && curPage !== 1 ? (
        <Link to={`/page/1${queryString}`} title="처음페이지">
          &laquo;
        </Link>
      ) : null}
      {isPrePage && (
        <Link to={`/page/${curPage - 1}${queryString}`} title="이전페이지">
          &lt;
        </Link>
      )}

      {pageCount.map(number => {
        return (
          <Link
            to={`/page/${number}${queryString}`}
            className={number === curPage ? 'active' : ''}
            key={number}
          >
            {number}
          </Link>
        );
      })}
      {isNextPage && (
        <Link to={`/page/${curPage + 1}${queryString}`} title="다음페이지">
          &gt;
        </Link>
      )}
      {totalPage > 0 && curPage !== totalPage && (
        <Link to={`/page/${totalPage}${queryString}`} title="마지막페이지">
          &raquo;
        </Link>
      )}
    </PaginationStyle>
  );
};

Pagination.defaultProps = { pageInfo: {} };
Pagination.propTypes = {
  pageInfo: PropTypes.shape({
    pageCount: PropTypes.arrayOf(PropTypes.number),
    isPrePage: PropTypes.bool,
    isNextPage: PropTypes.bool,
    totalPage: PropTypes.number,
  }),
};

export default Pagination;
