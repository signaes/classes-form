//@flow
import * as React from 'react';
import styled from 'styled-components';
import { media } from '../../../../Root/styles';

const StyledClassForm = styled.div`
  .row {
    display: flex;
    flex-direction: column;

    fieldset {
      display: flex;
      flex-grow: 1;
    }
  }

  ${media.phone`
    .row {
      flex-direction: row;
    }
  `}
`;

export default StyledClassForm;
