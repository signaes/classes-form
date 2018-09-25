//@flow
import * as React from 'react';
import styled, { css } from 'styled-components';
import { colors, media } from '../../Root/styles';

const StyledRadiosFieldset = styled.fieldset`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  margin-bottom: 1.25rem;

  .radios-fieldset {
    &__label {
      margin-bottom: .8rem;
      color: ${colors.casper};
      font-size: .8rem;
    }

    &__option {
      margin-right: 3rem;

      &__input {
        visibility: hidden;
        opacity: .01;
        position: absolute;
        left: -100%;
      }

      &__input:checked + .radios-fieldset__option__label:before {
        border-color: ${colors.shadowGreen};
      }

      &__input:checked + .radios-fieldset__option__label:after {
        background-color: ${colors.shadowGreen};
      }

      &__label:hover {
        &:before {
          border-color: ${colors.shadowGreen};
        }
      }

      &__label {
        display: inline-flex;
        align-items: center;
        position: relative;
        cursor: pointer;

        &:before,
        &:after {
          content: '';
          display: inline-flex;
          border-radius: 50%;
          box-sizing: border-box;
        }

        &:after {
          background-color: ${colors.white};
          width: .8rem;
          height: .8rem;
          position: absolute;
          top: .25rem;
          left: .25rem;
          transition: background-color ease .3s;
        }

        &:before {
          height: 1.3rem;
          width: 1.3rem;
          border: 2px solid ${colors.athensGrey};
          transition: border-color ease .3s;
          margin-right: .6rem;
        }
      }
    }
  }
`;

export default StyledRadiosFieldset;
