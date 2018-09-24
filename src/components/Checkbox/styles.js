//@flow
import * as React from 'react';
import styled, { css } from 'styled-components';
import { colors, media } from '../../Root/styles';

const StyledCheckbox = styled.label`
  display: inline-flex;
  position: relative;

  .checkbox {
    &__input {
      visibility: hidden;
      opacity: .01;
      position: absolute;
      left: -100%;
    }

    &__check {
      display: inline-flex;
      height: .65rem;
      width: .65rem;
      margin-right: .6rem;
      border: 2px solid ${colors.shadowGreen};
      border-radius: 5px;

      &__icon {
        opacity: 0;
        transition: opacity ease .3s;
      }
    }

    &__label-text {
      display: flex;
      align-items: center;

    }

    &__input:checked + .checkbox__check {
      &__icon {
        opacity; 1;
      }
    }
  }
`;

export default StyledCheckbox;

