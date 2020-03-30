import React from 'react';
import { ButtonStyle } from './Style';

const Button = ({ className, name, onClick, ...rest }) => {
  return (
    <ButtonStyle className={className} onClick={onClick} {...rest}>
      {name}
    </ButtonStyle>
  );
};

export default Button;
