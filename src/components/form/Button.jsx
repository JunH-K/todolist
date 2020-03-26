import React from 'react';
import { ButtonStyle } from './Style';

const Button = ({ className, name, onClick }) => {
  return (
    <ButtonStyle className={className} onClick={onClick}>
      {name}
    </ButtonStyle>
  );
};

export default Button;
