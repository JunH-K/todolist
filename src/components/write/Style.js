import styled from 'styled-components';

const Write = styled.div`
  margin: 5px;
  padding: 5px;
  border: 1px solid #a1a1a1;

  input {
    width: 77%;
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
  }

  input:focus {
    border-bottom: 2px solid #0078d7;
  }

  .write-todo {
    position: relative;
    margin-bottom: 2px;
  }

  .write-todo .add {
    width: 23%;
  }

  .write-ref {
    position: relative;
    margin-bottom: 2px;
  }

  .cancel {
    width: 11%;
    margin-right: 1%;
  }

  .delete {
    width: 11%;
  }
`;

export default Write;
