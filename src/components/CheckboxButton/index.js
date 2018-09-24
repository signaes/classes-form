//@flow
import React from 'react';
import StyledCheckboxButton from './styles';

const CheckboxButton = (props: Object) => (
  <StyledCheckboxButton
    htmlFor={props.value}
    className={`checkbox-button ${props.className}`}>
    <input
      {...props}
      data-label={props.label}
      className={`checkbox-button__input ${props.className}__input`}
      type="checkbox"
      id={props.value}
      name={props.name}
      onChange={props.onChange}
      value={props.value} />
    <span className={`checkbox-button__ui ${props.className}__ui`}>
      { props.label }
    </span>
  </StyledCheckboxButton>
);

export default CheckboxButton;
