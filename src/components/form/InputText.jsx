import { InputTextStyle } from './Style';
import React from 'react';

const InputText = ({ className, placeholder = '' }) => {
  return (
    <InputTextStyle
      type="text"
      className={className}
      placeholder={placeholder}
    />
  );
};

export default InputText;
