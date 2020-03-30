import React, { useState } from 'react';
import { InputTextStyle } from './Style';

const InputText = (
  {
    className,
    placeholder = '',
    onChange,
    defaultValue,
    validationFunc,
    isValidCallback,
  },
  ...rest
) => {
  const [isError, setIsError] = useState(false);

  const checkIsValid = value => {
    if (!validationFunc) {
      return true;
    }

    const isValid = value === '' ? true : validationFunc(value);

    if (isValidCallback) {
      isValidCallback(isValid);
    }
    return isValid;
  };

  const onChangeInput = e => {
    const {
      target: { value },
    } = e;
    setIsError(!checkIsValid(value));
    onChange(e);
  };

  return (
    <InputTextStyle
      type="text"
      className={className}
      placeholder={placeholder}
      onChange={onChangeInput}
      defaultValue={defaultValue}
      isError={isError}
      {...rest}
    />
  );
};

export default InputText;
