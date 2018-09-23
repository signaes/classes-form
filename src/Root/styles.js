//@flow
import * as React from 'react';
import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

// color names from http://www.color-blindness.com/color-name-hue/
export const colors = {
  white: '#fff',
  whiteSmoke: '#f0f0f0',
  athensGrey: '#e0E1E2',
  solitude: '#fafbfc',
};

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args: []) => css`
    @media (max-width: ${sizes[label] / 12}rem) {
      ${css(...args)}
    }
  `

  return acc;
}, {});


const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url('https://fonts.googleapis.com/css?family=Varela+Round');

  li {
    list-style: none;
  }

  body {
    background-color: ${colors.solitude};
    font-family: 'Varela Round', sans-serif;
    font-size: 12px;
  }
`;

export default GlobalStyle;
