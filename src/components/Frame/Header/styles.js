//@flow
import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../../Root/styles';

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.athensGrey};
  min-height: 3rem;
  padding: 0 3rem;
  box-sizing: border-box;
  position: ${props => (props.isFixed ? 'fixed' : 'initial')};

  & + * {
    margin-top: ${props => (props.isFixed ? '3rem' : 'initial')};
  }

  .logo {
    width: 157px;
  }

  .menu {
    display: flex;
  }
`;

export default StyledHeader;
