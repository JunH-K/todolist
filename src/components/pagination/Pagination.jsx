import React from 'react';
import styled from 'styled-components';
import PaginationStyle from './Style';

const Pagination = () => {
  return (
    <PaginationStyle className="pagination">
      <a href="#" title="처음으로">
        &laquo;
      </a>
      <a href="#" className="active">
        1
      </a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
      <a href="#">6</a>
      <a href="#" title="마지막으로">
        &raquo;
      </a>
    </PaginationStyle>
  );
};

export default Pagination;
