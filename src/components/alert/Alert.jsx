import React, { useEffect, useState } from 'react';
import Style from './style';

const Alert = ({ content = '', delayTime = 2 }) => {
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShow(false);
    }, delayTime * 1.1 * 1000);
  }, []);

  return (
    <Style className={`alert ${isShow ? 'show' : ''}`} delayTime={delayTime}>
      알림창~~알림창~~알림창~~알림창~~알림창~~알림창~~알림~
      알림창~~알림창~~알림창~~알림창~~알림창~~알림창~~알림~
      알림창~~알림창~~알림창~~알림창~~알림창~~알림창~~알림~
    </Style>
  );
};

export default Alert;
