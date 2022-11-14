import React from 'react';

import '@patternfly/react-core/dist/styles/base.css';
import './App.css';

import Header from '../components/Header';
import { Page, PageSection } from '@patternfly/react-core';
import Router from './router';

const App = () => (
  <Page header={Header}>
    <PageSection>
      <Router />
    </PageSection>
  </Page>
);

export default App;
