//@flow
import * as React from 'react';
import styled, { css } from 'styled-components';
import { colors, media } from '../../Root/styles';

const StyledFieldset = styled.fieldset`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  margin-bottom: 1.25rem;

  ${media.phone`
    width: ${props => (props.fullWidth ? '100%' : 'auto')};
  `}

  .fieldset__label {
    margin-bottom: .8rem;
    color: ${colors.casper};
    font-size: .8rem;
  }

  input,
  textarea {
    min-height: 1.5rem;
    padding: .8rem;
    border-radius: .3rem;
    outline: none;
    display: flex;
    width 100%;
    box-sizing: border-box;
    border: 1px solid ${colors.athensGrey};
    font-size: 14px;

    &::-webkit-input-placeholder,
    &::-moz-placeholder,
    &:-ms-input-placeholder,
    &:-moz-placeholder {
      color: ${colors.athensGrey};
    }
  }

  textarea {
    padding: .8rem .8rem;
    min-height: 6rem;
  }
`;

export default StyledFieldset;
