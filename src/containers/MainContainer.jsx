import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  INCREMENT_REQUEST } from '../reducers/counter';

const MainContainer = () => {
  const dispatch = useDispatch();
  const { count } = useSelector(state => state.counter);

  const onClickIncrement = () => {
    dispatch({ type: INCREMENT_REQUEST, data: 1 });
  };

  const onClickDecrement = () => {
  };

  return (
    <>
      <button onClick={onClickIncrement}>증가</button>
      <button onClick={onClickDecrement}>감소</button>
      <div>{count}</div>
    </>
  );
};

export default MainContainer;
