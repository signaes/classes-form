//@flow
import * as React from 'react';
import styled, { css } from 'styled-components';
import { colors, media } from '../../Root/styles';

const StyledCalendar = styled.div`
  .calendar {
    &__header,
    &__weekday {
      font-size: .8rem;
    }

    &__header {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${colors.shadowGreen};
      height: 2.9rem;
    }

    &__weekday {
      color: ${colors.casper};
    }

    &__week,
    &__weekday,
    &__day {
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__weekday,
    &__day {
      display: inline-flex;
      width: 2rem;
    }
  }
`;

export default StyledCalendar;
