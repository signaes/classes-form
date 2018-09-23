//@flow
import * as React from 'react';
import styled from 'styled-components';
import { media, colors } from '../../../../Root/styles';

const StyledClassForm = styled.div`
  .row {
    display: flex;
    flex-direction: column;

    fieldset {
      display: flex;
      flex-grow: 1;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem 0;

    .col {
      min-height: 100vh;
      padding-top: 2rem;
      padding-bottom: 2rem;

      ${media.phone`
        &:first-child {
          padding-right: 3.3rem;
        }

        &:last-child {
          border-left: 1px solid ${colors.athensGrey};
          padding-left: 3.3rem;
        }
      `}
    }

    ${media.phone`
      flex-direction: row;
    `}
  }

  ${media.phone`
    .row {
      flex-direction: row;
    }
  `}
`;

export default StyledClassForm;
