//@flow
import React from 'react';
import StyledCheckbox from './styles';
import { Check } from '../Icons/index';

const Checkbox = (props: Object) => (
  <StyledCheckbox
    htmlFor={props.value}
    className={`checkbox ${props.className}`}>
    <input
      {...props}
      className={`checkbox__input ${props.className}__input`}
      type="checkbox"
      id={props.value}
      name={props.name}
      onChange={props.onChange}
      value={props.value} />
    <span className={`chekbox__check ${props.className}__check`}>
      <Check
        className={`checkbox__check__icon ${props.className}__check__icon`} />
    </span>
    <span className={`checkbox__label-text ${props.className}__label-text`}>
      { props.label }
    </span>
  </StyledCheckbox>
);

export default Checkbox;
