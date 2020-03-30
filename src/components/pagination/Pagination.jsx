import React from 'react';
import { Link } from 'react-router-dom';
import PaginationStyle from './Style';

const Pagination = props => {
  const {
    pageInfo: {
      curPage: page,
      pageCount = [],
      totalPage,
      isPrePage,
      isNextPage,
    },
  } = props;
  const curPage = parseInt(page, 10);
  return (
    <PaginationStyle className="pagination">
      {totalPage && curPage !== 1 ? (
        <Link to="/page/1" title="처음페이지">
          &laquo;
        </Link>
      ) : null}
      {isPrePage && (
        <Link to={`/page/${curPage - 1}`} title="이전페이지">
          &lt;
        </Link>
      )}

      {pageCount.map(number => {
        return (
          <Link
            to={`/page/${number}`}
            className={number === parseInt(curPage, 10) ? 'active' : ''}
          >
            {number}
          </Link>
        );
      })}
      {isNextPage && (
        <Link to={`/page/${curPage + 1}`} title="다음페이지">
          &gt;
        </Link>
      )}
      {curPage !== totalPage && (
        <Link to={`/page/${totalPage}`} title="마지막페이지">
          &raquo;
        </Link>
      )}
    </PaginationStyle>
  );
};

export default Pagination;
