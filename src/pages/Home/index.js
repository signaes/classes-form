// @flow
import React from 'react';
import Frame from '../../components/Frame/index';
import ClassForm from './components/ClassForm/index';

const Home = () => (
  <Frame>
  <ClassForm
    siteName="Argonne Elementary"
    availableHours={[]} />
  </Frame>
);

export default Home;
