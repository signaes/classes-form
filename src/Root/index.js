// @flow
import React from 'react';
import { Route, Switch } from 'fusion-plugin-react-router';
import Home from '../pages/Home/index.js';
import PageNotFound from '../pages/pageNotFound.js';
import GlobalStyle from './styles';

const root = (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={PageNotFound} />
    </Switch>
    <GlobalStyle />
  </React.Fragment>
);

export default root;
