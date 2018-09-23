// @flow
import App from 'fusion-react';
import Router from 'fusion-plugin-react-router';
import HelmetPlugin from 'fusion-plugin-react-helmet-async';
import Styletron from 'fusion-plugin-styletron-react';
import I18n, {
  I18nToken,
  I18nLoaderToken,
  createI18nLoader,
} from 'fusion-plugin-i18n-react';
import { FetchToken } from 'fusion-tokens';
import fetch from 'unfetch';
import Root from './Root/index';

export default () => {
  const app = new App(Root);
  app.register(Styletron);
  app.register(Router);
  app.register(HelmetPlugin);
  // app.register(I18nToken, I18n);

  // __NODE__
  //   ? app.register(I18nLoaderToken, createI18nLoader())
  //   : app.register(FetchToken, fetch);

  return app;
};
