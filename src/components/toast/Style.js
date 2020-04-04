import styled from 'styled-components';

const Toast = styled.div`
  line-height: 20px;
  display: none;
  position: absolute;
  left: 50%;
  top: 20%;
  padding: 15px;
  width: 300px;
  max-height: 250px;
  transform: translate(-50%, -50%);
  background: #3d3d3d;
  color: white;
  opacity: 1;
  border-radius: 10px;
  z-index: 9999;

  &.show {
    display: block;
    opacity: 1;
    animation: showAni 1s, hideAni 1s ${({ delayTime }) => delayTime}s;
  }

  @keyframes showAni {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes hideAni {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default Toast;
