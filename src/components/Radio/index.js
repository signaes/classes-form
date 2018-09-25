//@flow
import React from 'react';
import StyledRadio from './styles';

const Radio = (props: Object) => (
  <StyledRadio
    htmlFor={props.value}
    className={`radio ${props.className}`}>
    <input
      {...props}
      data-label={props.label}
      className={`radio__input ${props.className}__input`}
      type="radio"
      id={props.value}
      name={props.name}
      onChange={props.onChange}
      value={props.value} />
    <span className={`radio__check ${props.className}__check`}>
    </span>
    <span className={`radio__label-text ${props.className}__label-text`}>
      { props.label }
    </span>
  </StyledRadio>
);

export default Radio;
