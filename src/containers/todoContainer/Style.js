import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 50%;
  margin: 0 auto;
  border: 1px solid #a1a1a1;
  transition: all 0.5s;

  @media (max-width: 768px) {
    width: 100%;
    transition: all 0.5s;
    border-left: none;
    border-right: none;
    border-top: none;
  }
`;

export default Container;
