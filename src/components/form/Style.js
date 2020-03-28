import styled from 'styled-components';

const InputTextStyle = styled.input`
  padding: 5px 5px;
  display: inline-block;
  width: 80%;
  height: 30px;
  border: 1px solid #ccc;
`;

const ButtonStyle = styled.button`
  background-color: #7c7c7c;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 2px;
  height: 30px;
`;

const TodoFormStyle = styled.div`
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

  @media (max-width: 768px) {
    margin: 0;
    border-top: 0;
    border-left: 0;
    border-right: 0;
  }
`;

export { InputTextStyle, ButtonStyle, TodoFormStyle };
