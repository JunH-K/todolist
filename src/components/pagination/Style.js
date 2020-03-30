import styled from 'styled-components';

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 10px;

  a {
    color: black;
    padding: 8px 16px;
    text-decoration: none;
  }

  a.active {
    background-color: #0078d7;
    color: white;
    border-radius: 5px;
  }

  a:hover:not(.active) {
    background-color: #ddd;
    border-radius: 5px;
  }
`;

export default Pagination;
