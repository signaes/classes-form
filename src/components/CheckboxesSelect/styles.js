//@flow
import * as React from 'react';
import styled, { css } from 'styled-components';
import { colors, media } from '../../Root/styles';

const StyledCheckboxesSelect = styled.fieldset`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  margin-bottom: 1.25rem;
  flex-grow: 1;
  position: relative;

  .checkboxes-select {
    &__label {
      color: ${colors.casper};
      margin-bottom: .8rem;
      font-size: .8rem;
    }

    &__value,
    &__options {
      min-height: 1.5rem;
      line-height: 1.25;
      padding: .8rem;
      border-radius: .3rem;
      display: flex;
      width 100%;
      box-sizing: border-box;
      background-color: ${colors.white};
      border: 1px solid ${colors.athensGrey};
      font-size: 14px;
    }

    &__options {
      flex-direction: column;
      padding: 0;
      position: absolute;
    }

    &__option {
      padding: .5em .8rem;
      cursor: pointer;
      transition: background-color ease .3s;

      &:hover {
        background-color: ${colors.bubbles};
      }
    }
  }

  ${media.phone`
    margin-left: 1.3rem;
    width: auto;
  `}

`;

export default StyledCheckboxesSelect;
