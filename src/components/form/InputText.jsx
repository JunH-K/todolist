import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputTextStyle } from './Style';

const InputText = ({
  className,
  placeholder = '',
  onChange,
  validationFunc,
  isValidCallback,
  ...rest
}) => {
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
      isError={isError}
      {...rest}
    />
  );
};

InputText.defaultProps = {
  className: '',
  placeholder: '',
  onChange: undefined,
  validationFunc: undefined,
  isValidCallback: undefined,
};
InputText.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  validationFunc: PropTypes.func,
  isValidCallback: PropTypes.func,
};

export default InputText;
