//@flow
import * as React from 'react';
import styled, { css } from 'styled-components';
import { colors, media } from '../../Root/styles';

const StyledCalendar = styled.div`
  .calendar {
    &__weekday,
    &__day {
      display: inline-flex;
      height: 2rem;
      width: 2rem;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default StyledCalendar;
