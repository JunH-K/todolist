import React, { useEffect, useState, useRef } from 'react';
import Style from './style';

const alertState = {};

const Toast = () => {
  const [show, setShow] = useState('');
  const [content, setContent] = useState('');
  const timer = useRef(0);
  alertState.setShow = setShow;
  alertState.setContent = setContent;

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      setShow('');
    }, 2 * 1.1 * 1000);
  }, [show]);

  return (
    <Style className={`alert ${show}`} delayTime={2}>
      {content}
    </Style>
  );
};

const showToast = value => {
  alertState.setShow('show');
  alertState.setContent(value);
};

export { Toast, showToast };
