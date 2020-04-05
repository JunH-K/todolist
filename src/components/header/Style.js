import styled from 'styled-components';

const HeaderStyle = styled.div`
  position: relative;
  height: 50px;
  background: #0078d7;

  .search {
    position: absolute;
    width:70%
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    border-radius:2px;
  }

  .more-action {
    float: right;
    position: absolute;
    top: 50%;
    right: 10px;
    width: 20%;
    transform: translateY(-50%);
  }
`;

const MoreActonContainerStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 90vh;
  background: rgba(0, 0, 0, 0);
  z-index: 999;
`;

const MoreActionStyle = styled.div`
  width: 200px;
  position: absolute;
  padding: 5px;
  top: 40px;
  right: 0;
  border-radius: 1px;
  border: 1px solid #6e6e6e;
  background: #f4f4f4;
  z-index: 1;

  .menu {
    height: 30px;
    padding-left: 5px;
    line-height: 30px;
    margin-top: 5px;
    cursor: pointer;
  }

  .menu:hover {
    background: #c5c5c5;
  }
`;

export { HeaderStyle, MoreActionStyle, MoreActonContainerStyle };
