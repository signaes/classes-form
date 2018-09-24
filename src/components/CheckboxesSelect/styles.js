//@flow
import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { colors, media } from '../../Root/styles';

const slideDown = keyframes`
  from {
    visibility: visible;
    transform: translateY(-1.5rem);
    opacity: 0;
  }

  to {
    transform: translateY(-1px);
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(-1px);
    opacity: 1;
  }

  to {
    transform: translateY(-1.5rem);
    opacity: 0;
    visibility: hidden;
  }
`

const StyledCheckboxesSelect = styled.fieldset`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  margin-bottom: 1.25rem;
  flex-grow: 1;
  position: relative;

  &[data-opened="true"] {
    .checkboxes-select__value {
      border-radius: .3rem .3rem 0 0;
    }

    .checkboxes-select__options {
      border-radius: 0 0 .3rem .3rem;
    }
  }

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
      transition: border-radius ease .3s;
      width 100%;
      box-sizing: border-box;
      background-color: ${colors.white};
      border: 1px solid ${colors.athensGrey};
      font-size: 14px;
    }

    &__value {
      cursor: pointer;
      position: relative;
      z-index: 1;
    }

    &__options {
      flex-direction: column;
      padding: 0;
      position: absolute;
      opacity: 0;
      pointer-events: all;

      &[data-opened="false"],
      &[data-opened="true"] {
        animation-duration: .3s;
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
      }

      &[data-opened="true"] {
        animation-name: ${slideDown};
        pointer-events: all;
      }

      &[data-opened="false"] {
        animation-name: ${slideUp};
        pointer-events: none;
        opacity: 0;
      }
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
