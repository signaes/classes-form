//@flow
import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../Root/styles';

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

    &__title {
      font-size: 1.5rem;
      color: ${colors.chambray};
      margin-bottom: .8em;
    }

    &__header {
      font-size: 1rem;

      &__subtitle {
        margin-bottom: 2rem;
      }
    }
  }
`;

export default StyledFrame;
