//@flow
import * as React from 'react';
import styled from 'styled-components';

const StyledFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .bound {
    max-width: 1040px;
    width: 100%;
  }
`;

export default StyledFrame;
