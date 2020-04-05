import styled from 'styled-components';

const CheckBox = styled.input.attrs({
  type: 'checkbox',
})`
  -ms-transform: scale(1.5); /* IE */
  -moz-transform: scale(1.5); /* FF */
  -webkit-transform: scale(1.5); /* Safari and Chrome */
  -o-transform: scale(1.5); /* Opera */
  transform: scale(1.5);
`;

const TodoStyle = styled.div`
  border-bottom: 1px solid #f0f0f0;
  line-height: 30px;
  padding-left: 10px;

  .todo-id {
    font-weight: bold;
    margin-left: 5px;
    margin-right: 5px;
  }

  .ref-id {
    color: #7a7a7a;
    font-size: 13px;
  }

  .content {
    ${({ done }) => {
      if (done) {
        return 'text-decoration: line-through;color: #b6b6b6;';
      }
      return '';
    }}
  }

  .date {
    left: 10px;
    font-size: 11px;
    padding-left: 20px;
    color: #7a7a7a;
  }

  .date .create-date {
    margin-right: 5px;
  }
`;

export { TodoStyle, CheckBox };
