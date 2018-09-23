//@flow
import * as React from 'react';
import styled, { css } from 'styled-components';
import { colors, media } from '../../Root/styles';

const StyledFieldset = styled.fieldset`
  width: 100%;
  display: inline-flex;
  flex-direction: column;

  ${media.phone`
    width: ${props => (props.fullWidth ? '100%' : 'auto')};

    ${({ fullWidth }) => fullWidth
      ? null
      : css`
        & + & {
          margin-left: 2.6rem;
        }
      `
    }
  `}

  label {
    margin-bottom: .8rem;
    color: ${colors.casper};
    font-size: 1rem;
  }

  input,
  textarea {
    min-height: 2rem;
    padding: 0 .8rem;
    border-radius: .3rem;
    outline: none;
    display: flex;
    width 100%;
    box-sizing: border-box;
    border: 1px solid ${colors.athensGrey};
  }
`;

export default StyledFieldset;
