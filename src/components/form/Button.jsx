import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyle } from './Style';

const Button = ({ className, name, onClick, ...rest }) => {
  return (
    <ButtonStyle className={className} onClick={onClick} {...rest}>
      {name}
    </ButtonStyle>
  );
};

Button.defaultProps = {
  className: '',
  name: '',
  onClick: undefined,
};
Button.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
