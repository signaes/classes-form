//@flow
import * as React from 'react';
import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

// color names from http://www.color-blindness.com/color-name-hue/
export const colors = {
  white: '#fff',
  whiteSmoke: '#f0f0f0',
  athensGrey: '#e0e1e2',
  solitude: '#fafbfc',
  casper: '#bdbebf',
  chambray: '#4b6074',
  raven: '#757677',
  bubbles: '#f5faf8',
  shadowGreen: '#92c5b8',
};

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
};

type MediaQuery = (...args: any) => string;

type Sizes = {
  [key: string]: MediaQuery,
};

export const media = Object.keys(sizes)
.reduce((acc: Object, label: string): Sizes => {
  (acc: Object)[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 12}rem) {
      ${css(...args)}
    }
  `

  return acc;
}, {
  desktop: (args: any) => '',
  tablet: (args: any) => '',
  phone: (args: any) => '',
});

const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url('https://fonts.googleapis.com/css?family=Varela+Round');

  li {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-weight: normal;
  }

  body {
    background-color: ${colors.solitude};
    font-family: 'Varela Round', sans-serif;
    font-size: 12px;
    color: ${colors.raven};
  }
`;

export default GlobalStyle;
