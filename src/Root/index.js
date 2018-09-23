// @flow
import React from 'react';
import { Route, Switch } from 'fusion-plugin-react-router';
import { Helmet } from 'fusion-plugin-react-helmet-async';
import Home from '../pages/Home/index.js';
import PageNotFound from '../pages/pageNotFound.js';
import GlobalStyle from './styles';

const root = (
  <React.Fragment>
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={PageNotFound} />
    </Switch>
    <GlobalStyle />
  </React.Fragment>
);

export default root;
