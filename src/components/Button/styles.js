//@flow
import * as React from 'react';
import styled, { css } from 'styled-components';
import { colors, media } from '../../Root/styles';

const StyledButton = styled.button`
  color: ${colors.white};
  background-color: ${colors.shadowGreen};
  min-width: 13.75rem;
  min-height: 3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 0;
  outline: none;

  &:disabled {
    pointer-events: none;
    background-color: ${colors.athensGrey};
  }
`;

export default StyledButton;
