//@flow
import * as React from 'react';
import styled from 'styled-components';

const StyledFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  .frame {
    &__bound {
      max-width: 1040px;
      width: 100%;
      flex-grow: 1;
    }
  }
`;

export default StyledFrame;
