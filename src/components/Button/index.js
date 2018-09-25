//@flow
import * as React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styles';

type Props = {
  children: React.Node,
  onClick: Function,
  disabled?: any,
};

const Button = ({ children, onClick, disabled = null }: Props) => (
  <StyledButton onClick={onClick} disabled={disabled}>
    { children }
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
