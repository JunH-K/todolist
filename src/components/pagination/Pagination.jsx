import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PaginationStyle from './Style';

const Pagination = ({
  totalPage,
  curPage,
  queryString,
  isPrePage,
  pageCount = [],
  isNextPage,
}) => {
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
Pagination.defaultProps = {
  totalPage: 0,
  curPage: 0,
  queryString: '',
  isPrePage: false,
  pageCount: [],
  isNextPage: false,
};
Pagination.propTypes = {
  totalPage: PropTypes.number,
  curPage: PropTypes.number,
  queryString: PropTypes.string,
  isPrePage: PropTypes.bool,
  pageCount: PropTypes.arrayOf(PropTypes.number),
  isNextPage: PropTypes.bool,
};

export default Pagination;
