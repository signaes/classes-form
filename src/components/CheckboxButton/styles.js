//@flow
import * as React from 'react';
import styled, { css } from 'styled-components';
import { colors, media } from '../../Root/styles';

const StyledCheckboxButton = styled.label`
  .checkbox-button {
    &__input {
      visibility: hidden;
      opacity: .01;
      position: absolute;
      left: -100%;
    }

    &__ui {
      display: inline-flex;
      position: relative;
      cursor: pointer;
      border: 1px solid ${colors.athensGrey};
      border-radius: .3rem;
      min-height: 2rem;
      min-width: 3rem;
      margin-right: 4px;
      align-items: center;
      justify-content: center;
      background-color: ${colors.white};
      transition: color ease .3s, border-color ease .3s, background-color ease .3s;

      &:hover {
        color: ${colors.white};
        background-color: ${colors.iceberg};
        border-color: ${colors.iceberg};
      }
    }

    &__input:checked + .checkbox-button__ui {
      color: ${colors.white};
      background-color: ${colors.shadowGreen};
      border-color: ${colors.shadowGreen};
    }

    &__input:disabled + .checkbox-button__ui {
      pointer-events: none;
      opacity: .5;
    }
  }
`;

export default StyledCheckboxButton;
