import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

const Style = styled.div`
  ${({ isLoading }) => {
    if (isLoading) {
      return 'display:block';
    }
    return 'display:none';
  }}
  width: 100%;
  height: 100%;
  background: rgba(174, 174, 174, 0.33);
  position: absolute;
  top: 0;
  left: 0;

  .ball {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: #fff;
    opacity: 1;
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%) scale(0);
    animation: bounce 1s infinite;
  }
  @keyframes bounce {
    100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0;
    }
  }
`;

const Loading = () => {
  const { isLoading } = useSelector(state => state.todos);
  return (
    <Style className="loading" isLoading={isLoading}>
      <div className="ball" />
    </Style>
  );
};

export default Loading;
