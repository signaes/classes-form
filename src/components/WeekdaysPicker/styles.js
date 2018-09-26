//@flow
import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { colors, media } from '../../Root/styles';

const StyledWeekdaysPicker = styled.fieldset`
  flex-direction: column;

  .weekdays-picker {
    &__rows {
      display: flex;
      flex-direction: column;
    }

    &__row {
      margin-bottom: 1rem;
    }

    &__range {
      margin-left: 1rem;
    }

    &__label {
      margin-bottom: .8rem;
      color: ${colors.casper};
      font-size: .8rem;
    }
  }
`;

export default StyledWeekdaysPicker;
