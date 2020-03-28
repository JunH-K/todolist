import { InputTextStyle } from './Style';
import React from 'react';

const InputText = (
  { className, placeholder = '', onChange, defaultValue },
  ...rest
) => {
  return (
    <InputTextStyle
      type="text"
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      defaultValue={defaultValue}
      {...rest}
    />
  );
};

export default InputText;
