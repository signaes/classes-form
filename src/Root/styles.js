//@flow
import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Varela+Round');

  body {
    background-color: #fafbfc;
    font-family: 'Varela Round', sans-serif;
  }
`;

export default GlobalStyle;
